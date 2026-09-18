"""Offline regression tests. No network, Steam installation, accounts or credentials."""
from __future__ import annotations
import asyncio
import builtins
import importlib.util
import json
import logging
from pathlib import Path
import sys
import tempfile
import threading
import time
import types
import unittest
from unittest.mock import patch
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
PNG = bytes.fromhex('89504e470d0a1a0a') + b'test fixture'


def load_backend(settings: Path):
    decky = types.ModuleType('decky')
    decky.DECKY_PLUGIN_SETTINGS_DIR = str(settings)
    decky.DECKY_PLUGIN_DIR = str(ROOT)
    decky.logger = logging.getLogger('playhub-metadata-tests')
    real_import = builtins.__import__
    def frozen_import(name, *args, **kwargs):
        if name in ('http.server', 'socketserver') or name == 'PIL' or name.startswith('PIL.'):
            raise ModuleNotFoundError(f"No module named '{name}'")
        return real_import(name, *args, **kwargs)
    with patch.dict(sys.modules, {'decky': decky}), patch('builtins.__import__', frozen_import):
        spec = importlib.util.spec_from_file_location('playhub_backend_test', ROOT / 'main.py')
        module = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(module)
    return module


def reset_error(filename='decky_loader/localplatform/localsocket.py', winerror=64):
    namespace = {}
    exec(compile('def _listen_for_method_call(error):\n    raise error\n', filename, 'exec'), namespace)
    error = ConnectionResetError('simulated peer disconnect')
    error.winerror = winerror
    try:
        namespace['_listen_for_method_call'](error)
    except ConnectionResetError as caught:
        return caught


class BackendRegression(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.directory = Path(self.temp.name)
        self.module = load_backend(self.directory)
        self.plugin = self.module.Plugin()
        # Never inspect/mutate a real Steam or RPCS3 installation in these tests.
        self.plugin._cleanup_loopback_icons = lambda: None
        self.plugin._steamui_loopback_icon_dir = lambda: None
        self.plugin._cleanup_removed_rpcs3_controller_feature_sync = lambda: 0
        self.plugin._windows_powershell_executable = lambda: ''
        self.failures = []
        asyncio.get_running_loop().set_exception_handler(lambda loop, context: self.failures.append(context))
        await self.plugin._main()

    async def asyncTearDown(self):
        await self.plugin._unload()
        await asyncio.sleep(0)
        self.assertEqual(self.failures, [], f'Unhandled asynchronous errors: {self.failures}')
        self.temp.cleanup()

    async def request(self, target, method='GET', extra='', host=None):
        port = self.plugin._image_proxy_port
        reader, writer = await asyncio.open_connection('127.0.0.1', port)
        host = host if host is not None else f'127.0.0.1:{port}'
        writer.write(f'{method} {target} HTTP/1.1\r\nHost: {host}\r\n{extra}\r\n'.encode())
        await writer.drain()
        result = await asyncio.wait_for(reader.read(), 5)
        writer.close()
        await writer.wait_closed()
        headers, body = result.split(b'\r\n\r\n', 1)
        return int(headers.split()[1]), headers, body

    async def test_boot_without_http_server_socketserver_and_pillow(self):
        self.assertIsNone(self.module.Image)
        self.assertGreater(self.plugin._image_proxy_port, 0)
        self.assertTrue(self.plugin._image_proxy_server.is_serving())
        self.assertIsInstance(await self.plugin.get_all_metadata(), dict)

    async def test_registered_rpcs3_get_and_head(self):
        icon = self.directory / 'trophy.png'
        icon.write_bytes(PNG)
        self.plugin._rpcs3_icon_proxy_paths['known'] = str(icon)
        status, headers, body = await self.request('/rpcs3-icon?key=known')
        self.assertEqual((status, body), (200, PNG))
        self.assertIn(f'Content-Length: {len(PNG)}'.encode(), headers)
        self.assertIn(b'Content-Type: image/png', headers)
        status, headers, body = await self.request('/rpcs3-icon?key=known', 'HEAD')
        self.assertEqual((status, body), (200, b''))
        self.assertIn(f'Content-Length: {len(PNG)}'.encode(), headers)

    async def test_missing_icons_and_arbitrary_paths(self):
        for target in ('/rpcs3-icon?key=missing', '/rpcs3-icon?key=../../secret', '/etc/passwd', '/xbox-icon?src=file:///secret'):
            status, _, _ = await self.request(target)
            self.assertEqual(status, 404, target)

    async def test_xbox_source_endpoint(self):
        seen = []
        self.plugin._xbox_proxy_icon_bytes = lambda source: seen.append(source) or PNG
        source = 'https://images-eds-ssl.xboxlive.com/image?url=example'
        status, _, body = await self.request('/xbox-icon?src=' + urllib.parse.quote(source, safe=''))
        self.assertEqual((status, body, seen), (200, PNG, [source]))

    async def test_spoofed_xbox_hosts_rejected(self):
        bad = ['https://evil.test/dlassets.xboxlive.com/image.png',
               'https://dlassets.xboxlive.com.evil.test/image.png',
               'https://dlassets.xboxlive.com@evil.test/image.png',
               'file:///dlassets.xboxlive.com',
               'https://dlassets.xboxlive.com:8080/image.png']
        for source in bad:
            self.assertFalse(self.plugin._is_xbox_card_image_url(source), source)
        for source in ('https://dlassets.xboxlive.com/a.png', 'https://store-images.s-microsoft.com/image/apps.123'):
            self.assertTrue(self.plugin._is_xbox_card_image_url(source))

    async def test_methods_host_and_preflight(self):
        self.assertEqual((await self.request('/rpcs3-icon', 'POST'))[0], 405)
        self.assertEqual((await self.request('/rpcs3-icon', host='evil.test'))[0], 403)
        status, headers, body = await self.request('/rpcs3-icon', 'OPTIONS', 'Origin: https://steamloopback.host\r\n')
        self.assertEqual((status, body), (204, b''))
        self.assertIn(b'Access-Control-Allow-Origin: https://steamloopback.host', headers)

    async def test_bad_and_oversized_requests(self):
        for raw, expected in ((b'bad\r\n\r\n', 400), (b'GET / HTTP/1.1\r\nX:' + b'a' * 18000 + b'\r\n\r\n', 431)):
            reader, writer = await asyncio.open_connection('127.0.0.1', self.plugin._image_proxy_port)
            writer.write(raw)
            await writer.drain()
            result = await asyncio.wait_for(reader.read(), 5)
            self.assertEqual(int(result.split()[1]), expected)
            writer.close()
            await writer.wait_closed()

    async def test_partial_request_disconnect_does_not_crash(self):
        reader, writer = await asyncio.open_connection('127.0.0.1', self.plugin._image_proxy_port)
        writer.write(b'GET /rpcs3-icon HTTP/1.1\r\n')
        await writer.drain()
        writer.close()
        await writer.wait_closed()
        await asyncio.sleep(0.03)
        self.assertEqual((await self.request('/missing'))[0], 404)

    async def test_worker_concurrency_is_bounded(self):
        active, maximum = 0, 0
        lock = threading.Lock()
        def read_icon(source):
            nonlocal active, maximum
            with lock:
                active += 1
                maximum = max(maximum, active)
            time.sleep(.03)
            with lock:
                active -= 1
            return PNG
        self.plugin._xbox_proxy_icon_bytes = read_icon
        target = '/xbox-icon?src=https%3A%2F%2Fdlassets.xboxlive.com%2Fa.png'
        results = await asyncio.gather(*(self.request(target) for _ in range(12)))
        self.assertTrue(all(result[0] == 200 for result in results))
        self.assertLessEqual(maximum, 4)

    async def test_unload_closes_port_and_cancels_clients(self):
        port = self.plugin._image_proxy_port
        reader, writer = await asyncio.open_connection('127.0.0.1', port)
        writer.write(b'GET /')
        await writer.drain()
        await asyncio.sleep(.01)
        await self.plugin._unload()
        self.assertEqual(self.plugin._image_proxy_port, 0)
        self.assertEqual(len(self.plugin._image_proxy_clients), 0)
        with self.assertRaises(OSError):
            await asyncio.open_connection('127.0.0.1', port)
        self.assertEqual(await asyncio.wait_for(reader.read(), 2), b'')
        writer.close()
        await writer.wait_closed()
        await self.plugin._main()
        self.assertGreater(self.plugin._image_proxy_port, 0)

    async def test_proxy_bind_failure_is_nonfatal(self):
        await self.plugin._stop_image_proxy_server()
        with patch('asyncio.start_server', side_effect=OSError('simulated bind failure')):
            await self.plugin._start_image_proxy_server()
        self.assertEqual(self.plugin._image_proxy_port, 0)
        self.assertIsInstance(await self.plugin.get_all_metadata(), dict)

    async def test_disconnect_filter_is_narrow(self):
        closed = types.SimpleNamespace(is_closing=lambda: True)
        open_socket = types.SimpleNamespace(is_closing=lambda: False)
        context = {'exception': reset_error(), 'transport': closed}
        self.assertTrue(self.plugin._is_closed_decky_socket_reset(context))
        for changed in ({'exception': ValueError('real bug')}, {'transport': open_socket},
                        {'exception': reset_error('plugin/main.py')}, {'exception': reset_error(winerror=5)}, {'transport': None}):
            self.assertFalse(self.plugin._is_closed_decky_socket_reset({**context, **changed}))
        self.plugin._disconnect_handler(asyncio.get_running_loop(), context)
        self.assertEqual(self.failures, [])

    async def test_real_errors_forwarded_and_previous_handler_restored(self):
        loop = asyncio.get_running_loop()
        previous = self.plugin._previous_exception_handler
        context = {'exception': ValueError('real error'), 'message': 'test'}
        self.plugin._disconnect_handler(loop, context)
        self.assertEqual(self.failures.pop(), context)
        self.plugin._restore_disconnect_handler()
        self.assertIs(loop.get_exception_handler(), previous)

    async def test_newer_exception_handler_is_not_overwritten(self):
        loop = asyncio.get_running_loop()
        newer = lambda event_loop, context: self.failures.append(context)
        loop.set_exception_handler(newer)
        self.plugin._restore_disconnect_handler()
        self.assertIs(loop.get_exception_handler(), newer)

    async def test_existing_metadata_and_associations_survive_reload(self):
        data = self.plugin._default_data()
        data['metadata']['123'] = {'title': 'Existing game', 'description': 'Existing description'}
        data['ra_game_ids']['123'] = 456
        self.plugin._data_file.write_text(json.dumps(data), encoding='utf-8')
        await self.plugin._unload()
        await self.plugin._main()
        state = await self.plugin.get_state()
        self.assertEqual(state['metadata']['123']['description'], 'Existing description')
        self.assertEqual(state['ra_game_ids']['123'], 456)

    async def test_ra_association_reload_ignores_invalid_entries(self):
        data = self.plugin._default_data()
        data['ra_game_ids'] = {'123': '456', 'zero': 0, 'bad': 'no-id', 'null': None, 'bool': True, 'list': []}
        self.plugin._data_file.write_text(json.dumps(data), encoding='utf-8')
        self.plugin._load_data()
        self.assertEqual(self.plugin._data['ra_game_ids'], {'123': 456})

if __name__ == '__main__':
    unittest.main()
