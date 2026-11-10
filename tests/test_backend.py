"""Offline regression tests. No network, Steam installation, accounts or credentials."""
from __future__ import annotations
import asyncio
import builtins
import importlib.util
import io
import ssl
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


def load_backend(settings: Path, without_difflib=False):
    decky = types.ModuleType('decky')
    decky.DECKY_PLUGIN_SETTINGS_DIR = str(settings)
    decky.DECKY_PLUGIN_DIR = str(ROOT)
    decky.logger = logging.getLogger('playhub-metadata-tests')
    real_import = builtins.__import__
    def frozen_import(name, *args, **kwargs):
        if without_difflib and name == 'difflib':
            raise ModuleNotFoundError("No module named 'difflib'", name='difflib')
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
        self.module = load_backend(self.directory, without_difflib=True)
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

    async def test_activity_search_rejects_number_in_dlc_model_or_pack(self):
        self.plugin._http_json = lambda url, **kwargs: {"items": [
            {"id": 4439830, "name": "Forza Horizon 6 2008 Honda Civic Type R (FD2)"},
            {"id": 4555555, "name": "Forza Horizon 6 - Pack 2"},
        ]}
        self.assertEqual(self.plugin._resolve_steam_appid_for_title("Forza Horizon 2"), (None, ""))

    async def test_activity_search_accepts_roman_arabic_and_edition_aliases(self):
        terms = []
        def fetch(url, **kwargs):
            term = urllib.parse.parse_qs(urllib.parse.urlsplit(url).query)["term"][0]
            terms.append(term)
            items = [{"id": 377840, "name": "FINAL FANTASY IX"}] if term == "final fantasy 9" else []
            return {"items": items}
        self.plugin._http_json = fetch
        title = "Final Fantasy 9 (USA) Complete Edition"
        app_id, _ = self.plugin._resolve_steam_appid_for_title(title)
        self.assertEqual(app_id, 377840)
        self.assertEqual(terms, [title, "final fantasy 9"])

    async def test_refresh_clears_proven_legacy_activity_mismatch(self):
        app_id, wrong_id = 4064247985, 4439830
        wrong_title = "Forza Horizon 6 2008 Honda Civic Type R (FD2)"
        await self.plugin.save_metadata(app_id, {
            "source": "IGN", "title": "Forza Horizon 2", "steam_appid": wrong_id,
            "steam_store_url": f"https://store.steampowered.com/app/{wrong_id}/",
            "steam_news": [{"title": "Forza Horizon 6 Community Calendar", "url": "https://store.steampowered.com/"}],
            "steam_news_enriched_at": 1792105829,
        })
        def fetch(url, **kwargs):
            if "/api/appdetails?" in url:
                return {str(wrong_id): {"success": True, "data": {"steam_appid": wrong_id, "name": wrong_title}}}
            self.assertIn("/api/storesearch/", url)
            return {"items": [{"id": wrong_id, "name": wrong_title}]}
        self.plugin._http_json = fetch
        news_appids = []
        self.plugin._steam_news_for_appid = lambda appid, *args, **kwargs: news_appids.append(appid) or []
        await self.plugin._refresh_steam_activities([{"appid": app_id, "name": "Forza Horizon 2"}])
        repaired = await self.plugin.get_metadata(app_id)
        self.assertIsNone(repaired["steam_appid"])
        self.assertEqual(repaired["steam_store_url"], "")
        self.assertEqual(repaired["steam_news"], [])
        self.assertEqual(repaired["steam_news_enriched_at"], 0)
        self.assertEqual(news_appids, [])
        self.assertEqual(repaired["title"], "Forza Horizon 2")

    async def test_refresh_preserves_aliases_explicit_choices_and_lookup_failures(self):
        requested, refreshed = [], []
        def fetch(url, **kwargs):
            self.assertIn("/api/appdetails?", url)
            query = urllib.parse.parse_qs(urllib.parse.urlsplit(url).query)
            app_id = int(query["appids"][0])
            requested.append(app_id)
            if app_id != 377840:
                raise TimeoutError("simulated timeout")
            return {str(app_id): {"success": True, "data": {"steam_appid": app_id, "name": "FINAL FANTASY IX"}}}
        self.plugin._http_json = fetch
        self.plugin._steam_news_for_appid = lambda appid, *args, **kwargs: refreshed.append(appid) or []
        rows = [
            {"title": "Final Fantasy 9", "steam_appid": 377840},
            {"title": "Forza Horizon 2", "steam_appid": 4439830, "steam_activity_title": "Forza Horizon 6"},
            {"title": "Forza Horizon 2", "steam_appid": 4439830,
                "source_url": "https://store.steampowered.com/app/4439830/"},
            {"title": "Final Fantasy V", "steam_appid": 1173810},
        ]
        for row in rows:
            result = self.plugin._metadata_with_steam_news_sync({"source": "IGN", **row}, row["title"])
            self.assertEqual(result["steam_appid"], row["steam_appid"])
        self.assertEqual(refreshed, [377840, 4439830, 4439830, 1173810])
        self.assertEqual(requested, [377840, 1173810])

    async def test_activity_bulk_refresh_keeps_concurrent_manual_removal(self):
        app_id = 4064247985
        await self.plugin.save_metadata(app_id, {"title": "Forza Horizon 2", "steam_appid": 4439830})
        entered = threading.Event()
        release = threading.Event()
        def refresh(metadata, title, limit):
            entered.set()
            if not release.wait(3):
                raise TimeoutError("test worker not released")
            return {**metadata, "steam_news": [{"title": "Late item", "url": "https://store.steampowered.com/"}]}
        self.plugin._metadata_with_steam_news_sync = refresh
        task = asyncio.create_task(self.plugin._refresh_steam_activities([{"appid": app_id}]))
        try:
            self.assertTrue(await asyncio.to_thread(entered.wait, 3))
            await self.plugin.clear_steam_activity_association(app_id)
        finally:
            release.set()
            await asyncio.wait_for(task, 3)
        current = await self.plugin.get_metadata(app_id)
        self.assertTrue(current["steam_activity_disabled"])
        self.assertEqual(current["steam_news"], [])
        self.assertIsNone(current["steam_appid"])
        progress = await self.plugin.get_activity_refresh_progress()
        self.assertEqual((progress["assigned"], progress["completed"], progress["status"]), (0, 1, "completed"))

    async def test_activity_bulk_refresh_skips_bad_ids_and_finishes_valid_game(self):
        app_id = 4064247985
        await self.plugin.save_metadata(app_id, {"title": "Forza Horizon 2"})
        called = []
        def refresh(metadata, title, limit):
            called.append(title)
            return metadata
        self.plugin._metadata_with_steam_news_sync = refresh
        await self.plugin.start_refresh_steam_activities([
            {"appid": "malformed"}, {"appid": "3.5"}, {"appid": True}, {"appid": 4294967296},
            {"appid": str(app_id)}, {"appid": app_id},
        ])
        await asyncio.wait_for(self.plugin._activity_refresh_task, 3)
        self.assertEqual(called, ["Forza Horizon 2"])
        progress = await self.plugin.get_activity_refresh_progress()
        self.assertEqual((progress["total"], progress["completed"], progress["running"]), (1, 1, False))

    async def test_partner_activity_keeps_steam_clan_and_vote_data(self):
        self.plugin._http_json = lambda url, **kwargs: {"events": [{
            "gid": "532125848715658292", "event_type": 28,
            "clan_steamid": "103582791440971704", "appid": 377840,
            "announcement_body": {
                "gid": "532125848715658293", "headline": "Final Fantasy IX update",
                "posttime": 1789740525, "voteupcount": 88, "votedowncount": 9, "commentcount": 3,
                "forum_topic_id": "805719856669524289",
            },
        }]}
        [event] = self.plugin._steam_partner_events_for_appid(377840)
        self.assertEqual(event["clan_steamid"], "103582791440971704")
        self.assertEqual(event["forum_topic_gid"], "805719856669524289")
        self.assertEqual((event["upvotes"], event["downvotes"], event["comment_count"]), (88, 9, 3))

    async def test_authenticated_achievement_requests_validate_tls(self):
        seen = []
        def build_opener(*handlers):
            tls = next(handler for handler in handlers if isinstance(handler, urllib.request.HTTPSHandler))
            self.assertEqual(tls._context.verify_mode, ssl.CERT_REQUIRED)
            self.assertTrue(tls._context.check_hostname)
            def open_request(request, timeout):
                self.assertEqual(request.type, "https")
                seen.append(urllib.parse.urlsplit(request.full_url).path)
                return io.BytesIO(b'{"User":"test-user","Achievements":{"1":{"Title":"Start"}}}')
            return types.SimpleNamespace(open=open_request)
        await self.plugin.set_retroachievements_settings(True, "test-user", "fixture-key")
        await self.plugin.set_retroachievements_game_id(101, 123)
        with patch('urllib.request.build_opener', side_effect=build_opener), patch('urllib.request.urlopen', side_effect=AssertionError("bypassed verified opener")):
            self.assertTrue((await self.plugin.test_retroachievements_credentials())["ok"])
            self.plugin._ra_request_json(self.module.RETROACHIEVEMENTS_GAME_LIST_URL, {"y": "fixture-key"})
            self.assertEqual((await self.plugin.sync_retroachievements_progress(101))["steam"]["nTotal"], 1)
            self.plugin._openxbl_request("/account", "fixture-key", cache_ttl=0)
        self.assertEqual(seen, ["/API/API_GetUserProfile.php", "/API/API_GetGameList.php",
                                "/API/API_GetGameInfoAndUserProgress.php", "/api/v2/account"])

    async def test_authenticated_provider_redirect_cannot_forward_credentials_to_another_origin(self):
        handler = self.module._AuthenticatedProviderRedirectHandler()
        request = urllib.request.Request("https://xbl.io/api/v2/account", headers={"X-Authorization": "fixture-key"})
        for destination in ("http://xbl.io/next", "https://elsewhere.example/next", "https://xbl.io:8443/next"):
            with self.assertRaises(urllib.error.HTTPError):
                handler.redirect_request(request, None, 302, "Found", {}, destination)
        redirect = handler.redirect_request(request, None, 302, "Found", {}, "https://xbl.io:443/next")
        self.assertEqual(redirect.full_url, "https://xbl.io:443/next")
        self.assertEqual(redirect.get_header("X-authorization"), "fixture-key")

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
