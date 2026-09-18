# Offline runtime dependencies

`runtime-deps.cjs` retains only the existing Decky API connection/bootstrap and the ten React Icons functions already bundled in the supplied Playhub Metadata 1.8.0 installer. It contains no old Playhub plugin logic, Steam source, credentials, fonts, or generated settings.

Provenance: the dependency-only prefix of the supplied `dist/index.js`; the supplied source map identifies `@decky/api` 1.1.3 and `react-icons` 5.7.0. Decky API is LGPL-2.1, React Icons is MIT, and Font Awesome icon artwork retains its upstream CC BY 4.0 attribution. Existing project credits remain in `NOTICE` and `LICENSE`.

This fixture lets `npm run build:offline` rebuild **all** current plugin sources without fetching runtime packages. A locally installed or globally available TypeScript compiler is still required. The normal `npm ci && npm run build` Rollup workflow remains supported.
