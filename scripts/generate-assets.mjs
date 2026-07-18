// Generates branded PNG/ICO assets from inline SVG (dev-only, via resvg-js).
// Run with: npm run gen:assets
import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "node:fs";

const NAVY = "#0E2038";
const GOLD = "#B7955C";
const CANVAS = "#F8FAFC";
const SERIF = "Georgia, 'Times New Roman', serif";

function render(svg, width) {
  const r = new Resvg(svg, {
    font: { loadSystemFonts: true },
    fitTo: { mode: "width", value: width },
  });
  return r.render().asPng();
}

// Monogram: navy rounded square + gold "LH".
function monogram({ rounded = true, contentScale = 1 } = {}) {
  const rx = rounded ? 9 : 0;
  const fs = 19 * contentScale;
  const y = 20 + fs * 0.34;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
  <rect width="40" height="40" rx="${rx}" fill="${NAVY}"/>
  <text x="20" y="${y}" text-anchor="middle" font-family="${SERIF}" font-size="${fs}" font-weight="600" letter-spacing="0.5" fill="${GOLD}">LH</text>
</svg>`;
}

// 1200x630 Open Graph card.
function ogCard() {
  const pillars = Array.from({ length: 7 }, (_, i) => {
    const x = 760 + i * 70;
    return `<rect x="${x}" y="70" width="18" height="490" rx="9" fill="${CANVAS}" opacity="0.05"/>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  ${pillars}
  <rect x="100" y="96" width="96" height="96" rx="22" fill="${CANVAS}" stroke="${GOLD}" stroke-width="3"/>
  <text x="148" y="160" text-anchor="middle" font-family="${SERIF}" font-size="46" font-weight="600" fill="${NAVY}">LH</text>
  <text x="100" y="330" font-family="${SERIF}" font-size="100" font-weight="600" fill="${CANVAS}">Lex Haven</text>
  <text x="104" y="392" font-family="${SERIF}" font-size="34" font-weight="600" letter-spacing="14" fill="${GOLD}">SOLICITORS</text>
  <rect x="100" y="436" width="120" height="3" fill="${GOLD}"/>
  <text x="100" y="500" font-family="${SERIF}" font-size="32" fill="${CANVAS}" opacity="0.86">Expertise. Integrity. Results.</text>
</svg>`;
}

// Minimal single-image .ico wrapping a 32x32 PNG payload.
function pngToIco(png) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // image count
  const entry = Buffer.alloc(16);
  entry[0] = 32; // width
  entry[1] = 32; // height
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(22, 12); // data offset
  return Buffer.concat([header, entry, png]);
}

const mono = monogram();
const targets = [
  ["public/og-image.png", ogCard(), 1200],
  ["src/app/apple-icon.png", mono, 180],
  ["public/icon-192.png", mono, 192],
  ["public/icon-512.png", mono, 512],
  [
    "public/icon-512-maskable.png",
    monogram({ rounded: false, contentScale: 0.62 }),
    512,
  ],
];

for (const [path, svg, width] of targets) {
  writeFileSync(path, render(svg, width));
  console.log(`wrote ${path} (${width}w)`);
}

writeFileSync("src/app/favicon.ico", pngToIco(render(mono, 32)));
console.log("wrote src/app/favicon.ico (32x32)");
