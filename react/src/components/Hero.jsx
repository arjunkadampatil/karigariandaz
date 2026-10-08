import Svg from "./Svg.jsx";
import { heroArt } from "../content/art.js";
import { STITCHES } from "../content/data.js";

const words = STITCHES.flatMap((s) => [s.name, s.hindi]);

export default function Hero() {
  const row = words.map((w, i) => (
    <span key={i} style={{ display: "contents" }}>
      <span>{w}</span>
      <i>✻</i>
    </span>
  ));
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow reveal">Lucknow Chikankari · Sourced direct</p>
          <h1 className="reveal">
            Handstitched in Lucknow.
            <br />
            <em>Discovered by the world.</em>
          </h1>
          <p className="lead reveal">
            Karigariandaz brings you hand-embroidered Chikankari from workshops we have visited ourselves — kurtas,
            sarees, dupattas and home linen, with the name of the workshop behind every piece.
          </p>
          <div className="hero-cta reveal">
            <a href="#collections" className="btn">Explore collections</a>
            <a href="#retailers" className="btn btn-ghost">
              Source wholesale <span aria-hidden="true">→</span>
            </a>
          </div>
          <ul className="hero-points reveal">
            <li>Hand-embroidered, never machine</li>
            <li>Workshops visited in person</li>
            <li>Shipping worldwide</li>
          </ul>
        </div>
        <Svg className="hero-art" html={heroArt()} />
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {row}
          {row}
        </div>
      </div>
    </section>
  );
}
