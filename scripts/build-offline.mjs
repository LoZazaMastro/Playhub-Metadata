/** Rebuild every plugin module; use only the retained upstream runtime dependencies. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { loadTypeScript } from './compiler.mjs';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ts = loadTypeScript();
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const sources = fs.readdirSync(path.join(root, 'src')).filter(name => /\.tsx?$/.test(name)).sort();
let output = `// Playhub Metadata ${manifest.version}: rebuilt from src with TypeScript ${ts.version}.\nconst index = (() => {\nconst factories = Object.create(null);\n`;
const sections = [];
const hashes = {};
for (const name of sources) {
  const source = fs.readFileSync(path.join(root, 'src', name), 'utf8');
  hashes[`src/${name}`] = createHash('sha256').update(source).digest('hex');
  const result = ts.transpileModule(source, {
    fileName: `src/${name}`, reportDiagnostics: true,
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true, sourceMap: true, inlineSources: true },
  });
  const errors = (result.diagnostics ?? []).filter(d => d.category === ts.DiagnosticCategory.Error);
  if (errors.length) throw new Error(ts.formatDiagnostics(errors, { getCurrentDirectory: () => root, getCanonicalFileName: x => x, getNewLine: () => '\n' }));
  const id = name.replace(/\.tsx?$/, '');
  output += `factories[${JSON.stringify(id)}] = function(module, exports, require) {\n`;
  const map = JSON.parse(result.sourceMapText);
  map.sources = [`../src/${name}`]; map.sourcesContent = [source];
  sections.push({ offset: { line: output.split('\n').length - 1, column: 0 }, map });
  output += result.outputText.replace(/^\/\/# sourceMappingURL=.*$/m, '').trimEnd() + '\n};\n';
}
const vendor = fs.readFileSync(path.join(root, 'vendor/runtime-deps.cjs'), 'utf8');
hashes['vendor/runtime-deps.cjs'] = createHash('sha256').update(vendor).digest('hex');
output += `factories.vendor = function(module, exports, require) {\n${vendor}\n};\n`;
output += `const cache = Object.create(null);
function load(id) {
  if (id.startsWith('./')) id = id.slice(2);
  if (id === 'react') return SP_REACT;
  if (id === '@decky/ui') return DFL;
  if (id === '@decky/api') return load('vendor').api;
  if (id === 'react-icons/fa') return load('vendor').icons;
  if (id === 'react/jsx-runtime') {
    const jsx = (type, props, key) => SP_REACT.createElement(type, key == null ? props : { ...props, key });
    return { jsx, jsxs: jsx, Fragment: SP_REACT.Fragment };
  }
  if (cache[id]) return cache[id].exports;
  if (!factories[id]) throw new Error('[Playhub Metadata] Missing bundled module: ' + id);
  const module = { exports: {} }; cache[id] = module;
  factories[id](module, module.exports, load);
  return module.exports;
}
return load('index').default;
})();
export { index as default };
//# sourceMappingURL=index.js.map
`;
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist/index.js'), output);
fs.writeFileSync(path.join(root, 'dist/index.js.map'), JSON.stringify({ version: 3, file: 'index.js', sections }));
const info = { version: manifest.version, build: 'offline-source-rebuild', compiler: `TypeScript ${ts.version}`,
  sources: hashes, bundle_sha256: createHash('sha256').update(output).digest('hex') };
fs.writeFileSync(path.join(root, 'dist/BUILD_INFO.json'), JSON.stringify(info, null, 2) + '\n');
console.log(`Built ${sources.length} source modules, ${output.length} characters; no unbundled imports.`);
