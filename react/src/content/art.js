// ─────────────────────────────────────────────────────────────
//  Karigariandaz — hand-drawn SVG artwork
//  Every motif is generated from code, so the site needs no
//  stock photos. Replace with real product photos any time.
// ─────────────────────────────────────────────────────────────

const r2 = (n) => Math.round(n * 100) / 100;

// A chikan-style flower: dashed petals (tepchi), knotted centre (phanda)
export function flower(cx, cy, r, petals = 6, color = "currentColor", rot = 0) {
  let out = `<g class="flower" transform="rotate(${rot} ${cx} ${cy})">`;
  for (let i = 0; i < petals; i++) {
    const a = (360 / petals) * i;
    out += `<ellipse cx="${cx}" cy="${r2(cy - r * 0.55)}" rx="${r2(r * 0.3)}" ry="${r2(r * 0.55)}"
      transform="rotate(${a} ${cx} ${cy})" fill="${color}" fill-opacity=".08"
      stroke="${color}" stroke-width="${r2(Math.max(0.8, r * 0.06))}" stroke-dasharray="${r2(r * 0.12)} ${r2(r * 0.07)}" stroke-linecap="round"/>`;
  }
  const k = Math.max(3, Math.round(r / 4));
  for (let i = 0; i < k; i++) {
    const a = (Math.PI * 2 * i) / k;
    out += `<circle cx="${r2(cx + Math.cos(a) * r * 0.16)}" cy="${r2(cy + Math.sin(a) * r * 0.16)}" r="${r2(Math.max(0.9, r * 0.07))}" fill="${color}"/>`;
  }
  out += `<circle cx="${cx}" cy="${cy}" r="${r2(Math.max(1, r * 0.08))}" fill="${color}"/>`;
  return out + `</g>`;
}

export function leaf(x, y, len, angle, color = "currentColor") {
  const w = len * 0.38;
  return `<g transform="translate(${x} ${y}) rotate(${angle})">
    <path d="M0 0 C ${r2(w)} ${r2(-len * 0.3)}, ${r2(w)} ${r2(-len * 0.75)}, 0 ${r2(-len)} C ${r2(-w)} ${r2(-len * 0.75)}, ${r2(-w)} ${r2(-len * 0.3)}, 0 0Z"
      fill="${color}" fill-opacity=".12" stroke="${color}" stroke-width="${r2(Math.max(0.8, len * 0.035))}" stroke-dasharray="${r2(len * 0.07)} ${r2(len * 0.045)}"/>
    <path d="M0 0 L0 ${r2(-len * 0.9)}" stroke="${color}" stroke-width="${r2(Math.max(0.6, len * 0.025))}" stroke-dasharray="${r2(len * 0.05)} ${r2(len * 0.05)}"/>
  </g>`;
}

function dots(x, y, n, spread, rr, color) {
  let o = "";
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n;
    o += `<circle cx="${r2(x + Math.cos(a) * spread)}" cy="${r2(y + Math.sin(a) * spread)}" r="${rr}" fill="${color}"/>`;
  }
  return o;
}

// ── Product card motifs (viewBox 0 0 300 360) ────────────────
export function productArt(motif, bg, ink) {
  let body = "";
  switch (motif) {
    case "buta": {
      body += `<path d="M150 70 C 230 90, 245 210, 175 270 C 130 305, 80 280, 85 225 C 90 180, 140 175, 150 140 C 158 110, 140 90, 150 70Z"
        fill="${ink}" fill-opacity=".05" stroke="${ink}" stroke-width="2" stroke-dasharray="6 4"/>`;
      body += `<path d="M150 92 C 212 112, 222 205, 170 252 C 135 282, 102 262, 104 228" fill="none" stroke="${ink}" stroke-width="1.2" stroke-dasharray="3 3"/>`;
      body += flower(140, 225, 30, 7, ink) + flower(178, 165, 18, 6, ink, 20) + flower(160, 110, 10, 5, ink);
      body += leaf(118, 250, 30, -130, ink) + leaf(200, 200, 26, 40, ink) + leaf(168, 135, 18, -20, ink);
      body += dots(150, 300, 6, 8, 1.6, ink) + dots(90, 120, 5, 6, 1.4, ink) + dots(225, 95, 5, 6, 1.4, ink);
      break;
    }
    case "jaal": {
      for (let y = 40; y <= 340; y += 60)
        for (let x = 30; x <= 290; x += 60) {
          const off = (y / 60) % 2 ? 30 : 0;
          body += flower(x + off, y, 12, 6, ink);
        }
      for (let y = 70; y <= 340; y += 60)
        body += `<path d="M0 ${y} Q 75 ${y - 30} 150 ${y} T 300 ${y}" fill="none" stroke="${ink}" stroke-width="1" stroke-dasharray="3 4" opacity=".7"/>`;
      break;
    }
    case "booti": {
      const pts = [[60, 60], [170, 45], [250, 100], [100, 140], [210, 180], [60, 230], [150, 250], [250, 270], [100, 320], [210, 330]];
      pts.forEach(([x, y], i) => {
        body += flower(x, y, i % 3 === 0 ? 16 : 11, i % 2 ? 5 : 6, ink, i * 17);
        body += leaf(x + 6, y + 14, 12, 140, ink);
      });
      break;
    }
    case "placket": {
      body += `<path d="M150 0 L150 360" stroke="${ink}" stroke-width="1" opacity=".3"/>`;
      body += `<rect x="115" y="0" width="70" height="360" fill="${ink}" fill-opacity=".04" stroke="${ink}" stroke-width="1.4" stroke-dasharray="5 4"/>`;
      for (let y = 40; y < 360; y += 64) {
        body += flower(150, y, 18, 6, ink);
        body += leaf(150, y + 46, 18, 0, ink);
      }
      [60, 240].forEach((x) => {
        for (let y = 60; y < 360; y += 90) body += flower(x, y, 8, 5, ink);
      });
      break;
    }
    case "border": {
      for (let y = 40; y < 250; y += 55)
        for (let x = 40; x < 300; x += 70) body += flower(x + ((y / 55) % 2 ? 35 : 0), y, 7, 5, ink);
      body += `<rect x="0" y="262" width="300" height="98" fill="${ink}" fill-opacity=".06"/>`;
      body += `<path d="M0 268 L300 268 M0 354 L300 354" stroke="${ink}" stroke-width="1.4" stroke-dasharray="5 4"/>`;
      body += `<path d="M0 311 C 37 281, 75 341, 112 311 S 187 281, 225 311 S 300 341, 300 311" fill="none" stroke="${ink}" stroke-width="1.6" stroke-dasharray="4 3"/>`;
      [37, 112, 187, 262].forEach((x, i) => {
        body += flower(x, 311, 17, 6, ink, i * 15);
      });
      [75, 150, 225].forEach((x) => (body += leaf(x, 320, 18, 0, ink) + leaf(x, 302, 18, 180, ink)));
      break;
    }
    case "medallion": {
      body += `<circle cx="150" cy="180" r="110" fill="none" stroke="${ink}" stroke-width="1.4" stroke-dasharray="5 4"/>`;
      body += `<circle cx="150" cy="180" r="96" fill="none" stroke="${ink}" stroke-width="1" stroke-dasharray="2 4"/>`;
      for (let i = 0; i < 12; i++) {
        const a = (Math.PI * 2 * i) / 12;
        body += leaf(r2(150 + Math.cos(a) * 52), r2(180 + Math.sin(a) * 52), 34, r2((a * 180) / Math.PI + 90), ink);
        body += flower(r2(150 + Math.cos(a + 0.26) * 103), r2(180 + Math.sin(a + 0.26) * 103), 6, 5, ink);
      }
      body += flower(150, 180, 34, 8, ink);
      [[30, 30], [270, 30], [30, 330], [270, 330]].forEach(([x, y]) => (body += flower(x, y, 12, 6, ink)));
      break;
    }
  }
  return `<svg viewBox="0 0 300 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
    <rect width="300" height="360" fill="${bg}"/>
    <g opacity=".95">${body}</g>
  </svg>`;
}

// ── Stitch diagrams (viewBox 0 0 120 80) ─────────────────────
export function stitchArt(type) {
  const c = "currentColor";
  let b = "";
  switch (type) {
    case "running":
      for (let y = 18; y <= 62; y += 11) b += `<path d="M10 ${y} L110 ${y}" stroke="${c}" stroke-width="2.2" stroke-dasharray="9 5" stroke-linecap="round"/>`;
      break;
    case "shadow":
      b += `<path d="M20 15 C 60 5, 100 20, 100 40 C 100 65, 50 72, 20 60 Z" fill="${c}" fill-opacity=".18"/>`;
      b += `<path d="M22 22 ${Array.from({ length: 12 }, (_, i) => `L ${26 + i * 6.5} ${i % 2 ? 22 : 56}`).join(" ")}" fill="none" stroke="${c}" stroke-width="1.3" opacity=".7"/>`;
      b += `<path d="M20 15 C 60 5, 100 20, 100 40 C 100 65, 50 72, 20 60 Z" fill="none" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 3"/>`;
      break;
    case "knot":
      [[60, 40, 12, 8], [60, 40, 0, 1], [60, 40, 22, 14]].forEach(([x, y, s, n]) => {
        for (let i = 0; i < n; i++) {
          const a = (Math.PI * 2 * i) / n;
          b += `<circle cx="${r2(x + Math.cos(a) * s)}" cy="${r2(y + Math.sin(a) * s)}" r="3.2" fill="${c}"/>`;
        }
      });
      break;
    case "grain":
      for (let i = 0; i < 6; i++) {
        const a = i * 60;
        b += `<ellipse cx="60" cy="22" rx="5" ry="11" fill="${c}" fill-opacity=".85" transform="rotate(${a} 60 40)"/>`;
      }
      b += `<circle cx="60" cy="40" r="3" fill="${c}"/>`;
      break;
    case "net":
      b += `<rect x="25" y="10" width="70" height="60" rx="6" fill="none" stroke="${c}" stroke-width="1.6" stroke-dasharray="4 3"/>`;
      for (let y = 20; y <= 60; y += 10) for (let x = 35; x <= 85; x += 10) b += `<circle cx="${x}" cy="${y}" r="3" fill="none" stroke="${c}" stroke-width="1.4"/>`;
      break;
    case "ring":
      for (let i = 0; i < 16; i++) {
        const a = (Math.PI * 2 * i) / 16;
        b += `<path d="M${r2(60 + Math.cos(a) * 10)} ${r2(40 + Math.sin(a) * 10)} L${r2(60 + Math.cos(a) * 24)} ${r2(40 + Math.sin(a) * 24)}" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`;
      }
      b += `<circle cx="60" cy="40" r="3" fill="${c}"/>`;
      break;
    case "eyelet":
      [[38, 40], [82, 40]].forEach(([x, y]) => {
        b += `<circle cx="${x}" cy="${y}" r="15" fill="none" stroke="${c}" stroke-width="3.2"/>`;
        for (let i = 0; i < 10; i++) {
          const a = (Math.PI * 2 * i) / 10;
          b += `<path d="M${r2(x + Math.cos(a) * 3)} ${r2(y + Math.sin(a) * 3)} L${r2(x + Math.cos(a) * 11)} ${r2(y + Math.sin(a) * 11)}" stroke="${c}" stroke-width="1.1"/>`;
        }
      });
      break;
    case "chain":
      for (let x = 14; x < 106; x += 14) b += `<path d="M${x} 40 C ${x + 4} 26, ${x + 14} 26, ${x + 16} 40 C ${x + 14} 54, ${x + 4} 54, ${x} 40Z" fill="none" stroke="${c}" stroke-width="2"/>`;
      break;
  }
  return `<svg viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${b}</svg>`;
}

// ── Large hero motif with a self-drawing vine ────────────────
export function heroArt() {
  const ink = "currentColor";
  let s = `<svg class="hero-svg" viewBox="0 0 520 620" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">`;
  s += `<path class="draw" d="M260 600 C 250 520, 300 470, 270 400 C 240 330, 170 330, 170 260 C 170 190, 250 170, 260 110 C 268 70, 250 40, 262 20"
          fill="none" stroke="${ink}" stroke-width="2.4" stroke-linecap="round"/>`;
  s += `<path class="draw d2" d="M270 400 C 330 380, 380 330, 400 270 M170 260 C 120 240, 90 200, 95 150 M260 110 C 320 100, 360 120, 385 150"
          fill="none" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>`;
  s += `<g class="bloom b1">${flower(400, 262, 46, 8, ink)}</g>`;
  s += `<g class="bloom b2">${flower(95, 140, 38, 7, ink, 12)}</g>`;
  s += `<g class="bloom b3">${flower(262, 22, 20, 6, ink)}</g>`;
  s += `<g class="bloom b4">${flower(390, 152, 24, 6, ink, 30)}</g>`;
  s += `<g class="bloom b5">${flower(215, 470, 30, 7, ink, 8)}</g>`;
  s += `<g class="bloom b2">${leaf(300, 455, 52, 70, ink)}${leaf(232, 345, 46, -60, ink)}${leaf(180, 200, 40, 55, ink)}</g>`;
  s += `<g class="bloom b4">${leaf(330, 370, 40, 130, ink)}${leaf(140, 300, 38, -120, ink)}${leaf(250, 150, 34, -40, ink)}</g>`;
  s += `<g class="bloom b5">${dots(330, 560, 7, 10, 2.4, ink)}${dots(120, 420, 6, 8, 2, ink)}${dots(450, 380, 6, 8, 2, ink)}${dots(360, 60, 5, 7, 2, ink)}</g>`;
  return s + `</svg>`;
}

// Small decorative divider
export function dividerArt() {
  const c = "currentColor";
  return `<svg viewBox="0 0 240 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 12 L95 12 M145 12 L240 12" stroke="${c}" stroke-width="1" stroke-dasharray="4 4"/>
    ${flower(120, 12, 10, 6, c)}
  </svg>`;
}
