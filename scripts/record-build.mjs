/** Record provenance after the standard Rollup build (offline builder records its own). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { loadTypeScript } from './compiler.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
const sources={};
for(const name of fs.readdirSync(path.join(root,'src')).filter(n=>/\.tsx?$/.test(n)).sort())
  sources[`src/${name}`]=digest(fs.readFileSync(path.join(root,'src',name)));
const info={version:JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8')).version,
  build:process.argv[2]||'rollup',compiler:`TypeScript ${loadTypeScript().version}`,sources,
  bundle_sha256:digest(fs.readFileSync(path.join(root,'dist/index.js')))};
fs.writeFileSync(path.join(root,'dist/BUILD_INFO.json'),JSON.stringify(info,null,2)+'\n');
console.log('Recorded current source/bundle hashes.');
