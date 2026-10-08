import Svg from "./Svg.jsx";
import { stitchArt } from "../content/art.js";
import { STITCHES } from "../content/data.js";

export default function Craft() {
  return (
    <section className="section craft" id="craft">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The Craft</p>
          <h2 className="reveal">Every flower is a stitch with a name</h2>
          <p className="reveal">
            Chikankari is white-on-white embroidery from Lucknow, traditionally worked on fine cotton mulmul, with its
            origins usually traced to the Mughal court. Karigars draw on a vocabulary of around thirty-two stitches.
            These are the ones you will see most often.
          </p>
        </div>
        <div className="stitch-grid">
          {STITCHES.map((s, i) => (
            <article className="stitch reveal" style={{ "--d": `${(i % 4) * 70}ms` }} key={s.name}>
              <Svg className="stitch-art" html={stitchArt(s.type)} />
              <h3>
                {s.name} <span className="deva">{s.hindi}</span>
              </h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
