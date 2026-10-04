// Reads the original campaign files in assets/ (never written to) and writes
// cleanly named derivatives and art-directed crops to src/assets/photos/.
// Astro then generates the responsive AVIF/WebP sizes from these at build.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = (f) => path.join(root, 'assets', f);
const outDir = path.join(root, 'src', 'assets', 'photos');

const MASTER = 'cafe-lumiere-master-interior.png.png';
const LIFESTYLE = 'cafe-lumiere-lifestyle-morning.png.png';
const EXTERIOR = 'cafe-lumiere-exterior.png.png';
const COFFEE = 'cafe-lumiere-coffee-croissant.png.png';

// Crop boxes are in original pixel coordinates.
const jobs = [
  { from: MASTER, to: 'master-interior' },
  { from: MASTER, to: 'master-interior-portrait', crop: { left: 1269, top: 0, width: 1768, height: 2336 } },
  { from: LIFESTYLE, to: 'lifestyle-morning' },
  { from: LIFESTYLE, to: 'lifestyle-morning-portrait', crop: { left: 35, top: 437, width: 1516, height: 1895 } },
  { from: EXTERIOR, to: 'exterior', crop: { left: 262, top: 376, width: 3238, height: 1957 } },
  { from: COFFEE, to: 'coffee-croissant' },
];

await mkdir(outDir, { recursive: true });

for (const job of jobs) {
  let img = sharp(src(job.from));
  if (job.crop) img = img.extract(job.crop);
  const out = path.join(outDir, `${job.to}.jpg`);
  const info = await img.jpeg({ quality: 92, chromaSubsampling: '4:4:4', mozjpeg: true }).toFile(out);
  console.log(`${job.to}.jpg  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
}
