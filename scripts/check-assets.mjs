// Fails the build if the site references an image that isn't in public/.
//
// This exists because a bulk rename to .webp once missed the template-literal
// references (`gallery-${n}.jpg`), and a grep written with the same assumption
// missed them too — the homepage shipped with broken images. Checking against
// the filesystem can't share that blind spot.
//
//   npm run check:assets

import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const PUBLIC_DIR = path.resolve('public');
const SRC_DIR = path.resolve('src');
const MANIFEST = path.resolve('src/data/media.json');

const IMAGE_EXT = /\.(webp|jpe?g|png|gif|svg|avif)$/i;

/** Every file path under a directory, relative to it. */
async function walk(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full, base) : [path.relative(base, full)];
    })
  );
  return files.flat();
}

const available = new Set((await walk(PUBLIC_DIR)).map((f) => f.split(path.sep).join('/')));

const problems = [];

// 1. Everything named in the media manifest must exist.
const manifest = JSON.parse(await readFile(MANIFEST, 'utf8'));
const manifestFiles = [manifest.badge, ...manifest.infographics, ...manifest.gallery.map((g) => g.file)];

for (const file of manifestFiles) {
  if (!available.has(file)) problems.push(`media.json references missing file: ${file}`);
}

// 2. Any image filename written as a literal in src must exist too. This is the
//    net for references that don't go through the manifest.
const sourceFiles = (await walk(SRC_DIR)).filter((f) => /\.(jsx?|css)$/.test(f));

for (const relative of sourceFiles) {
  const contents = await readFile(path.join(SRC_DIR, relative), 'utf8');
  for (const [, quoted] of contents.matchAll(/['"`]([\w./-]+\.(?:webp|jpe?g|png|gif|avif))['"`]/gi)) {
    const file = quoted.replace(/^\.?\//, '');
    if (IMAGE_EXT.test(file) && !available.has(file)) {
      problems.push(`${path.join('src', relative)} references missing file: ${file}`);
    }
  }
}

// 3. Reject image paths assembled at runtime outside the media module. A path
//    like `${BASE_URL}gallery-${n}.webp` can't be checked against the
//    filesystem, and that is exactly how the broken homepage images slipped
//    through: a bulk rename skipped the interpolated form. Route them through
//    src/data/media.js so the filenames stay checkable.
const MEDIA_MODULE = path.join('data', 'media.js');

for (const relative of sourceFiles) {
  if (relative.endsWith(MEDIA_MODULE)) continue;
  const contents = await readFile(path.join(SRC_DIR, relative), 'utf8');
  for (const [match] of contents.matchAll(/`[^`]*\$\{[^`]*\}[^`]*\.(?:webp|jpe?g|png|gif|avif)`/gi)) {
    problems.push(
      `${path.join('src', relative)} builds an image path dynamically: ${match.trim()}\n` +
        `      Move it into src/data/media.json so it can be verified.`
    );
  }
}

// 4. Warn about anything shipped but never referenced.
const referenced = new Set(manifestFiles);
for (const relative of sourceFiles) {
  const contents = await readFile(path.join(SRC_DIR, relative), 'utf8');
  for (const [, quoted] of contents.matchAll(/['"`]([\w./-]+\.(?:webp|jpe?g|png|gif|avif))['"`]/gi)) {
    referenced.add(quoted.replace(/^\.?\//, ''));
  }
}
const orphans = [...available].filter((f) => IMAGE_EXT.test(f) && !referenced.has(f));

if (problems.length) {
  console.error('Asset check failed:\n' + problems.map((p) => `  - ${p}`).join('\n'));
  process.exit(1);
}

console.log(`Asset check passed — ${manifestFiles.length} manifest entries, ${available.size} files in public/.`);
if (orphans.length) {
  console.warn(`Unreferenced files in public/: ${orphans.join(', ')}`);
}
