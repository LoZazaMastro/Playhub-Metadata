Playhub Metadata
Recovered Decky Loader plugin project reconstructed from the installable package.
Contents
`main.py` — Python backend.
`src/` — TypeScript/React frontend sources recovered from `dist/index.js.map`.
`dist/` — bundled frontend from the original package.
`plugin.json` — Decky plugin manifest.
`package.json` — npm metadata and scripts from the original package.
`rollup.config.js` and `tsconfig.json` — project build configuration.
`package-win.ps1` — Windows helper to create a Decky-installable zip with the correct root folder.
Build
```powershell
pnpm install
pnpm build
```
Package for Decky
```powershell
pnpm package
```
The package script creates a zip with this structure:
```text
Playhub Metadata/
  main.py
  package.json
  plugin.json
  dist/index.js
  dist/index.js.map
```
Note: the source files were recovered from the sourcemap included in the uploaded installable zip.
