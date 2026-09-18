import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
const require = createRequire(import.meta.url);
export function loadTypeScript() {
  try { return require('typescript'); } catch { /* Try an existing global compiler. */ }
  if (process.env.TYPESCRIPT_PATH) return require(process.env.TYPESCRIPT_PATH);
  try {
    const root = execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['root', '-g'], { encoding: 'utf8', shell: process.platform === 'win32' }).trim();
    return require(path.join(root, 'typescript'));
  } catch {
    throw new Error('TypeScript is required. Run npm ci, install TypeScript globally, or set TYPESCRIPT_PATH.');
  }
}
