import Svg from "./Svg.jsx";
import { dividerArt } from "../content/art.js";

export default function Promise() {
  return (
    <section className="section promise">
      <div className="wrap narrow center">
        <Svg className="divider" html={dividerArt()} />
        <h2 className="reveal">A 400-year-old craft, a supply chain nobody can see</h2>
        <p className="reveal">
          Most Chikankari reaches buyers after passing through several hands — the karigar, the workshop, a wholesaler
          in Chowk, an agent, an exporter. By the time it reaches a store abroad, nobody can say who made it, and
          machine-made copies sit on the same shelf at the same price.
        </p>
      </div>
      <div className="wrap promise-grid">
        <article className="pcard reveal">
          <span className="pnum">01</span>
          <h3>For buyers</h3>
          <p>No way to tell real hand work from machine copies when buying online or from abroad.</p>
        </article>
        <article className="pcard reveal">
          <span className="pnum">02</span>
          <h3>For workshops</h3>
          <p>Skilled workshops depend on middlemen to reach any buyer outside Lucknow.</p>
        </article>
        <article className="pcard pcard-accent reveal">
          <span className="pnum">03</span>
          <h3>Karigariandaz</h3>
          <p>
            A catalogue of verified workshops. You see who made it, how, and from what — and order from them directly
            through us.
          </p>
        </article>
      </div>
    </section>
  );
}
