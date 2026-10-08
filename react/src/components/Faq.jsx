import { FAQ } from "../content/data.js";

export default function Faq() {
  return (
    <section className="section faq">
      <div className="wrap narrow">
        <div className="section-head center">
          <p className="eyebrow">Questions</p>
          <h2 className="reveal">Before you order</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>
                {f.q}
                <span className="faq-icon" aria-hidden="true"></span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
