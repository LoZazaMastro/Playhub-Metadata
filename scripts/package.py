"""Package matching Installer/Project ZIPs, without user data or dependencies."""
from __future__ import annotations
import argparse
import hashlib
import json
from pathlib import Path
import zipfile

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {'node_modules', '.git', '__pycache__', '.pytest_cache', 'build-package', 'work'}
INSTALLER_FILES = ['main.py', 'package.json', 'plugin.json', 'LICENSE', 'NOTICE',
                   'CHANGELOG.md', 'INSTALL_1.8.1_IT.md', 'dist/index.js',
                   'dist/index.js.map', 'dist/BUILD_INFO.json']


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output-dir', type=Path, default=ROOT.parent)
    args = parser.parse_args()
    version = json.loads((ROOT / 'package.json').read_text())['version']
    if json.loads((ROOT / 'plugin.json').read_text())['version'] != version:
        raise SystemExit('package.json and plugin.json versions differ')
    info = json.loads((ROOT / 'dist/BUILD_INFO.json').read_text())
    expected = {**info['sources'], 'dist/index.js': info['bundle_sha256']}
    if info['version'] != version:
        raise SystemExit('Build version is stale; rebuild before packaging')
    for filename, digest in expected.items():
        if hashlib.sha256((ROOT / filename).read_bytes()).hexdigest() != digest:
            raise SystemExit(f'Stale build: {filename}. Rebuild and refresh BUILD_INFO.json.')
    output = args.output_dir.resolve()
    output.mkdir(parents=True, exist_ok=True)
    installer = output / f'Playhub-Metadata_{version}_Installer.zip'
    project = output / f'Playhub-Metadata_{version}_Project.zip'
    with zipfile.ZipFile(installer, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name in INSTALLER_FILES:
            archive.write(ROOT / name, f'Playhub Metadata/{name}')
    with zipfile.ZipFile(project, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for path in sorted(ROOT.rglob('*')):
            relative = path.relative_to(ROOT)
            if (not path.is_file() or set(relative.parts) & EXCLUDED
                    or path.suffix in {'.zip', '.pyc', '.pyo', '.log'}):
                continue
            archive.write(path, f'Playhub-Metadata_{version}_Project/{relative.as_posix()}')
    with zipfile.ZipFile(installer) as a, zipfile.ZipFile(project) as b:
        if a.testzip() or b.testzip():
            raise SystemExit('ZIP CRC verification failed')
        for name in INSTALLER_FILES:
            if a.read(f'Playhub Metadata/{name}') != b.read(f'Playhub-Metadata_{version}_Project/{name}'):
                raise SystemExit(f'Runtime differs between archives: {name}')
    for path in (installer, project):
        print(f'{path.name}: {path.stat().st_size:,} bytes; sha256 {hashlib.sha256(path.read_bytes()).hexdigest()}')

if __name__ == '__main__':
    main()
