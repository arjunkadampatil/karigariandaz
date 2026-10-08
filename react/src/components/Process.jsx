import Svg from "./Svg.jsx";
import { productArt } from "../content/art.js";
import { PROCESS } from "../content/data.js";

export default function Process() {
  return (
    <section className="section process">
      <div className="wrap process-grid">
        <div className="process-intro">
          <p className="eyebrow">From block to garment</p>
          <h2 className="reveal">How a piece is made</h2>
          <p className="reveal">Five stages, many hands, and almost all of it done by hand in and around Lucknow.</p>
          <Svg className="process-art" html={productArt("medallion", "transparent", "currentColor")} />
        </div>
        <ol className="timeline">
          {PROCESS.map((p) => (
            <li className="reveal" key={p.step}>
              <span className="t-step">{p.step}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
