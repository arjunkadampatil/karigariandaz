import { useEffect, useState } from "react";
import { flower } from "../content/art.js";
import { SITE } from "../content/data.js";

const LINKS = [
  ["craft", "The Craft"],
  ["collections", "Collections"],
  ["retailers", "For Retailers"],
  ["verified", "Verified"],
  ["story", "Our Story"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setCurrent(en.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    LINKS.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("lock", open);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="top">
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label={`${SITE.name} home`} onClick={close}>
          <span
            className="brand-mark"
            dangerouslySetInnerHTML={{ __html: `<svg viewBox="0 0 40 40" aria-hidden="true">${flower(20, 20, 17, 6, "currentColor")}</svg>` }}
          />
          <span className="brand-text">
            {SITE.name}
            <small className="deva">{SITE.hindi}</small>
          </span>
        </a>
        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks" aria-label="Primary">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={current === id ? "current" : ""} onClick={close}>
              {label}
            </a>
          ))}
          <a href="#enquire" className="btn btn-sm" onClick={close}>Enquire</a>
        </nav>
        <button
          className={`menu-btn${open ? " open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
