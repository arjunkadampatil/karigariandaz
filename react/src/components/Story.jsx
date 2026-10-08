import { useEffect, useRef, useState } from "react";
import { STATS } from "../content/data.js";

function Stat({ s }) {
  const ref = useRef(null);
  const [n, setN] = useState(s.value);
  useEffect(() => {
    const el = ref.current;
    if (!el || s.plain || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const run = () => {
      const start = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - start) / 1400);
        setN(Math.round(s.value * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    el.addEventListener("revealed", run, { once: true });
    return () => el.removeEventListener("revealed", run);
  }, [s]);
  return (
    <div className="stat reveal" ref={ref}>
      <span className="stat-num">{n}</span>
      <span className="stat-suf">{s.suffix}</span>
      <p>{s.label}</p>
    </div>
  );
}

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="wrap story-grid">
        <div className="story-copy">
          <p className="eyebrow">Our Story</p>
          <h2 className="reveal">It started with walking the lanes of Lucknow</h2>
          <p className="reveal">
            Karigariandaz began as a field study by students at Sitare University. We wanted to know one thing: can
            Lucknow's Chikankari reach buyers outside India without losing the people who make it along the way?
          </p>
          <p className="reveal">
            So we went and asked. We visited workshops and shops in and around Lucknow, sat with owners who explained
            how orders, wages and middlemen really work, and spent days in the wholesale lanes of Chowk. Some welcomed
            us in; a couple of them didn't want to talk. All of it shaped what we built.
          </p>
          <p className="reveal">
            The name says what we care about: <span className="deva">कारीगरी</span> — the skill of the karigar — and{" "}
            <span className="deva">अंदाज़</span> — the style that makes Lucknow's work unlike anyone else's.
          </p>
        </div>
        <div className="stats">
          {STATS.map((s) => (
            <Stat s={s} key={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
