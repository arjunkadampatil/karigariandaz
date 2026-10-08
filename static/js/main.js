import { SITE, STITCHES, PROCESS, CATEGORIES, PRODUCTS, VERIFY, SPOT_FAKE, FAQ, STATS } from "./data.js";
import { productArt, stitchArt, heroArt, dividerArt, flower } from "./art.js";
import { buildMailto, validate } from "./enquiry.js";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── Artwork ─────────────────────────────────────────────── */
$$('[data-art="hero"]').forEach((el) => (el.innerHTML = heroArt()));
$$('[data-art="divider"]').forEach((el) => (el.innerHTML = dividerArt()));
$$('[data-art="divider-mark"]').forEach(
  (el) => (el.innerHTML = `<svg viewBox="0 0 40 40" aria-hidden="true">${flower(20, 20, 17, 6, "currentColor")}</svg>`)
);
$$('[data-art="process"]').forEach((el) => (el.innerHTML = productArt("medallion", "transparent", "currentColor")));
$$('[data-art="enquire"]').forEach((el) => (el.innerHTML = productArt("buta", "transparent", "currentColor")));

/* ── Marquee ─────────────────────────────────────────────── */
const words = STITCHES.flatMap((s) => [s.name, s.hindi]);
const marqueeHTML = words.map((w) => `<span>${w}</span><i>✻</i>`).join("");
$("#marquee").innerHTML = marqueeHTML + marqueeHTML;

/* ── Stitches ────────────────────────────────────────────── */
$("#stitchGrid").innerHTML = STITCHES.map(
  (s, i) => `
  <article class="stitch reveal" style="--d:${(i % 4) * 70}ms">
    <div class="stitch-art">${stitchArt(s.type)}</div>
    <h3>${s.name} <span class="deva">${s.hindi}</span></h3>
    <p>${s.text}</p>
  </article>`
).join("");

/* ── Process ─────────────────────────────────────────────── */
$("#timeline").innerHTML = PROCESS.map(
  (p) => `
  <li class="reveal">
    <span class="t-step">${p.step}</span>
    <div><h3>${p.title}</h3><p>${p.text}</p></div>
  </li>`
).join("");

/* ── Collections ─────────────────────────────────────────── */
const grid = $("#productGrid");
function renderProducts(cat) {
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  grid.innerHTML = list
    .map(
      (p, i) => `
    <article class="product" style="--d:${i * 60}ms">
      <div class="product-art">${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" />` : productArt(p.motif, p.palette[0], p.palette[1])}
        <span class="product-tag">${CATEGORIES.find((c) => c.id === p.cat).label}</span>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3>
        <p class="product-note">${p.note}</p>
        <dl>
          <div><dt>Fabric</dt><dd>${p.fabric}</dd></div>
          <div><dt>Stitches</dt><dd>${p.stitches}</dd></div>
        </dl>
        <a href="#enquire" class="link-btn" data-enquire-item="${p.name}">Enquire about this <span aria-hidden="true">→</span></a>
      </div>
    </article>`
    )
    .join("");
  requestAnimationFrame(() => $$(".product", grid).forEach((el) => el.classList.add("in")));
}
$("#filters").innerHTML = CATEGORIES.map(
  (c, i) => `<button role="tab" class="chip${i === 0 ? " active" : ""}" data-cat="${c.id}" aria-selected="${i === 0}">${c.label}</button>`
).join("");
$("#filters").addEventListener("click", (e) => {
  const b = e.target.closest(".chip");
  if (!b) return;
  $$(".chip").forEach((c) => {
    c.classList.toggle("active", c === b);
    c.setAttribute("aria-selected", c === b);
  });
  renderProducts(b.dataset.cat);
});
renderProducts("all");

/* ── Verification ────────────────────────────────────────── */
$("#verifyGrid").innerHTML = VERIFY.map(
  (v, i) => `
  <article class="vcard reveal" style="--d:${i * 80}ms">
    <span class="vnum">${String(i + 1).padStart(2, "0")}</span>
    <h3>${v.title}</h3><p>${v.text}</p>
  </article>`
).join("");
$("#spotList").innerHTML = SPOT_FAKE.map(([t, d]) => `<div><h4>${t}</h4><p>${d}</p></div>`).join("");

/* ── Stats with count-up ─────────────────────────────────── */
$("#stats").innerHTML = STATS.map(
  (s) => `
  <div class="stat reveal">
    <span class="stat-num" data-to="${s.value}" data-plain="${!!s.plain}">${s.value}</span><span class="stat-suf">${s.suffix}</span>
    <p>${s.label}</p>
  </div>`
).join("");
function countUp(el) {
  if (el.dataset.plain === "true" || reduceMotion) return (el.textContent = el.dataset.to);
  const to = +el.dataset.to, start = performance.now(), dur = 1400;
  el.textContent = 0;
  const tick = (t) => {
    const k = Math.min(1, (t - start) / dur);
    el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── FAQ ─────────────────────────────────────────────────── */
$("#faqList").innerHTML = FAQ.map(
  (f) => `
  <details class="faq-item">
    <summary>${f.q}<span class="faq-icon" aria-hidden="true"></span></summary>
    <p>${f.a}</p>
  </details>`
).join("");

/* ── Enquiry form ────────────────────────────────────────── */
const form = $("#enquiryForm");
$("#interestSelect").innerHTML =
  `<option>Not sure yet</option>` +
  CATEGORIES.filter((c) => c.id !== "all").map((c) => `<option>${c.label}</option>`).join("") +
  PRODUCTS.map((p) => `<option>${p.name}</option>`).join("");

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-enquire-type],[data-enquire-item]");
  if (!t) return;
  if (t.dataset.enquireType) {
    const r = form.querySelector(`input[name="type"][value="${t.dataset.enquireType}"]`);
    if (r) r.checked = true;
  }
  if (t.dataset.enquireItem) $("#interestSelect").value = t.dataset.enquireItem;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = Object.fromEntries(new FormData(form).entries());
  const errors = validate(f);
  $$(".field", form).forEach((el) => el.classList.remove("error"));
  Object.keys(errors).forEach((k) => form.elements[k].closest(".field").classList.add("error"));
  const status = $("#formStatus");
  if (Object.keys(errors).length) {
    status.textContent = Object.values(errors)[0] + ".";
    status.className = "form-status bad";
    form.elements[Object.keys(errors)[0]].focus();
    return;
  }
  window.location.href = buildMailto(f);
  status.textContent = `Your email app should open now. If it doesn't, write to ${SITE.enquiryEmail}.`;
  status.className = "form-status good";
});

/* ── Footer ──────────────────────────────────────────────── */
$("#year").textContent = new Date().getFullYear();
$("#footerCity").textContent = SITE.city;
const fe = $("#footerEmail");
fe.textContent = SITE.enquiryEmail;
fe.href = `mailto:${SITE.enquiryEmail}`;

/* ── Header: shadow on scroll, mobile menu ───────────────── */
const nav = $(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const menuBtn = $("#menuBtn");
const links = $("#navLinks");
menuBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  document.body.classList.toggle("lock", open);
});
links.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    links.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("lock");
  }
});

/* ── Active section highlight in nav ─────────────────────── */
const sectionIds = ["craft", "collections", "retailers", "verified", "story"];
const navObs = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (en.isIntersecting)
        $$(".nav-links a").forEach((a) => a.classList.toggle("current", a.getAttribute("href") === "#" + en.target.id));
    }),
  { rootMargin: "-45% 0px -50% 0px" }
);
sectionIds.forEach((id) => navObs.observe(document.getElementById(id)));

/* ── Reveal on scroll ────────────────────────────────────── */
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      $$(".stat-num", en.target).forEach(countUp);
      io.unobserve(en.target);
    }),
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => io.observe(el));
document.documentElement.classList.add("js");
