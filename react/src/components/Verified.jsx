import { VERIFY, SPOT_FAKE } from "../content/data.js";

export default function Verified() {
  return (
    <section className="section verified" id="verified">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What “verified” means</p>
          <h2 className="reveal">Four checks before a workshop is listed</h2>
        </div>
        <div className="verify-grid">
          {VERIFY.map((v, i) => (
            <article className="vcard reveal" style={{ "--d": `${i * 80}ms` }} key={v.title}>
              <span className="vnum">{String(i + 1).padStart(2, "0")}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </article>
          ))}
        </div>
        <div className="spot reveal">
          <div className="spot-head">
            <h3>How to spot real hand Chikankari</h3>
            <p>Useful whether you buy from us or anyone else.</p>
          </div>
          <div className="spot-list">
            {SPOT_FAKE.map(([t, d]) => (
              <div key={t}>
                <h4>{t}</h4>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
