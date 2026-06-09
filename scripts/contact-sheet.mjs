// Build optimized webps + one labeled contact sheet for curation.
import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join } from 'path';

const SRC = 'image_references';
const OUT = 'temp/optimized';        // optimized full-size, gitignored until curated
const SHEET = 'temp/contact-sheet.png';
mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();

const COLS = 8;
const CELL_W = 240, CELL_H = 200, PAD = 6, LABEL = 18;
const rows = Math.ceil(files.length / COLS);
const sheetW = COLS * (CELL_W + PAD) + PAD;
const sheetH = rows * (CELL_H + PAD + LABEL) + PAD;

const composites = [];
let i = 0;
for (const f of files) {
  const idx = String(i + 1).padStart(2, '0');
  // optimized full-size for the site
  await sharp(join(SRC, f)).rotate().resize(1500, 1500, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 }).toFile(join(OUT, `p${idx}.webp`));
  // thumb for sheet
  const thumb = await sharp(join(SRC, f)).rotate().resize(CELL_W, CELL_H, { fit: 'cover' }).png().toBuffer();
  const col = i % COLS, row = Math.floor(i / COLS);
  const x = PAD + col * (CELL_W + PAD);
  const y = PAD + row * (CELL_H + PAD + LABEL);
  const label = Buffer.from(
    `<svg width="${CELL_W}" height="${LABEL}"><rect width="100%" height="100%" fill="#000"/><text x="4" y="14" font-family="monospace" font-size="14" fill="#0f0">p${idx}</text></svg>`
  );
  composites.push({ input: thumb, left: x, top: y });
  composites.push({ input: label, left: x, top: y + CELL_H });
  i++;
}

await sharp({ create: { width: sheetW, height: sheetH, channels: 3, background: '#222' } })
  .composite(composites).png().toFile(SHEET);

console.log(`optimized ${files.length} -> ${OUT}`);
console.log(`contact sheet -> ${SHEET} (${sheetW}x${sheetH}, ${COLS} cols)`);
