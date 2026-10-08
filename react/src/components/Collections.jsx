import { useEffect, useState } from "react";
import Svg from "./Svg.jsx";
import { productArt } from "../content/art.js";
import { CATEGORIES, PRODUCTS } from "../content/data.js";

function Product({ p, i, onEnquire }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const label = CATEGORIES.find((c) => c.id === p.cat).label;
  return (
    <article className={`product${shown ? " in" : ""}`} style={{ "--d": `${i * 60}ms` }}>
      <div className="product-art">
        {p.image ? (
          <img src={p.image} alt={p.name} loading="lazy" />
        ) : (
          <Svg html={productArt(p.motif, p.palette[0], p.palette[1])} style={{ height: "100%" }} />
        )}
        <span className="product-tag">{label}</span>
      </div>
      <div className="product-body">
        <h3>{p.name}</h3>
        <p className="product-note">{p.note}</p>
        <dl>
          <div><dt>Fabric</dt><dd>{p.fabric}</dd></div>
          <div><dt>Stitches</dt><dd>{p.stitches}</dd></div>
        </dl>
        <a href="#enquire" className="link-btn" onClick={() => onEnquire(p.name)}>
          Enquire about this <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

export default function Collections({ onEnquire }) {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);

  return (
    <section className="section collections" id="collections">
      <div className="wrap">
        <div className="section-head row">
          <div>
            <p className="eyebrow">Collections</p>
            <h2 className="reveal">What our workshops make</h2>
          </div>
          <div className="filters" role="tablist" aria-label="Filter collections">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                className={`chip${cat === c.id ? " active" : ""}`}
                onClick={() => setCat(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="product-grid">
          {list.map((p, i) => (
            <Product key={`${cat}-${p.id}`} p={p} i={i} onEnquire={onEnquire} />
          ))}
        </div>
        <p className="note center">
          Prices depend on fabric, stitch density and quantity. Send an enquiry and we will share a quote from the
          workshop.
        </p>
      </div>
    </section>
  );
}
