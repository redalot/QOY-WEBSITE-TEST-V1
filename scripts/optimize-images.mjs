// Converts the source screenshots and infographics in public/ to WebP.
//
// The originals are full-resolution Arma screenshots (some over 3MB), which is
// far more than the site ever displays. Run this after dropping new images in
// public/source/:
//
//   npm run images
//
// Drop new source images in image-source/ first.
//
// Originals live in image-source/ — deliberately outside public/ so Vite never
// copies them into the build, and gitignored to keep the repo small. The
// optimised .webp files land in public/ and are what the site references, so
// keep your own backup of the originals.

import { readdir, mkdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const SOURCE_DIR = path.resolve('image-source');
const OUT_DIR = path.resolve('public');

// Photographs compress well and are only ever shown at moderate size.
// Infographics carry small text, so they keep more resolution and quality.
const PROFILES = {
  photo: { width: 1600, quality: 78 },
  diagram: { width: 1500, quality: 90 },
};

const profileFor = (name) =>
  /rifle-section|fire-support-group|courses/.test(name) ? PROFILES.diagram : PROFILES.photo;

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

async function main() {
  if (!existsSync(SOURCE_DIR)) {
    console.error(`No source directory at ${SOURCE_DIR}`);
    process.exit(1);
  }

  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SOURCE_DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));
  if (files.length === 0) {
    console.log('No source images found.');
    return;
  }

  let before = 0;
  let after = 0;

  for (const file of files) {
    const inPath = path.join(SOURCE_DIR, file);
    const outName = `${path.parse(file).name}.webp`;
    const outPath = path.join(OUT_DIR, outName);
    const { width, quality } = profileFor(file);

    const srcSize = (await stat(inPath)).size;

    await sharp(inPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outPath);

    const outSize = (await stat(outPath)).size;
    before += srcSize;
    after += outSize;

    const saved = (100 * (1 - outSize / srcSize)).toFixed(0);
    console.log(`${file} -> ${outName}  ${kb(srcSize)} -> ${kb(outSize)}  (-${saved}%)`);
  }

  console.log(
    `\nTotal: ${kb(before)} -> ${kb(after)} (-${(100 * (1 - after / before)).toFixed(0)}%)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
