import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dirs = ["public/screens/light", "public/screens/dark"];
const WIDTH = 660;
const QUALITY = 80;

let before = 0;
let after = 0;

for (const dir of dirs) {
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".png")) continue;
    const src = join(dir, file);
    const out = src.replace(/\.png$/, ".webp");
    await sharp(src)
      .resize({ width: WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);
    before += statSync(src).size;
    after += statSync(out).size;
    console.log(`${src} -> ${out}`);
  }
}

const kb = (n) => `${Math.round(n / 1024)}KB`;
console.log(`\nPNG total: ${kb(before)}  WebP total: ${kb(after)}  (${Math.round((1 - after / before) * 100)}% smaller)`);
