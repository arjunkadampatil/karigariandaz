import { useEffect, useRef, useState } from "react";
import Svg from "./Svg.jsx";
import { productArt } from "../content/art.js";
import { SITE, CATEGORIES, PRODUCTS } from "../content/data.js";
import { buildMailto, validate } from "../content/enquiry.js";

const TYPES = ["Retailer / Boutique", "Individual customer", "Workshop owner"];
const QTY = ["1–5 pieces", "6–50 pieces", "51–200 pieces", "200+ pieces"];
const INTERESTS = [
  "Not sure yet",
  ...CATEGORIES.filter((c) => c.id !== "all").map((c) => c.label),
  ...PRODUCTS.map((p) => p.name),
];
const EMPTY = { type: TYPES[0], name: "", email: "", country: "", business: "", interest: INTERESTS[0], qty: QTY[0], message: "" };

export default function Enquiry({ prefill }) {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ text: "", kind: "" });
  const formRef = useRef(null);

  useEffect(() => {
    if (prefill.n === 0) return;
    setF((cur) => ({ ...cur, type: prefill.type, interest: prefill.item }));
  }, [prefill]);

  const set = (k) => (e) => setF((cur) => ({ ...cur, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    const keys = Object.keys(errs);
    if (keys.length) {
      setStatus({ text: errs[keys[0]] + ".", kind: "bad" });
      formRef.current.elements[keys[0]].focus();
      return;
    }
    window.location.href = buildMailto(f);
    setStatus({ text: `Your email app should open now. If it doesn't, write to ${SITE.enquiryEmail}.`, kind: "good" });
  };

  const cls = (k) => `field${errors[k] ? " error" : ""}`;

  return (
    <section className="section enquire" id="enquire">
      <div className="wrap enquire-grid">
        <div className="enquire-copy">
          <p className="eyebrow">Enquire</p>
          <h2>Tell us what you are looking for</h2>
          <p>
            Fill this in and send — it opens your email app with everything filled in. We reply with workshop options,
            samples and a quote.
          </p>
          <Svg className="enquire-art" html={productArt("buta", "transparent", "currentColor")} />
        </div>
        <form className="form" ref={formRef} onSubmit={submit} noValidate>
          <div className="seg" role="radiogroup" aria-label="I am a">
            {TYPES.map((t) => (
              <label key={t}>
                <input type="radio" name="type" value={t} checked={f.type === t} onChange={set("type")} />
                <span>{t}</span>
              </label>
            ))}
          </div>
          <div className="field-row">
            <label className={cls("name")}>
              <span>Your name</span>
              <input name="name" value={f.name} onChange={set("name")} autoComplete="name" required />
            </label>
            <label className={cls("email")}>
              <span>Email</span>
              <input name="email" type="email" value={f.email} onChange={set("email")} autoComplete="email" required />
            </label>
          </div>
          <div className="field-row">
            <label className={cls("country")}>
              <span>Country</span>
              <input name="country" value={f.country} onChange={set("country")} autoComplete="country-name" required />
            </label>
            <label className="field">
              <span>Business name <em>(optional)</em></span>
              <input name="business" value={f.business} onChange={set("business")} autoComplete="organization" />
            </label>
          </div>
          <div className="field-row">
            <label className="field">
              <span>Interested in</span>
              <select name="interest" value={f.interest} onChange={set("interest")}>
                {INTERESTS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Quantity</span>
              <select name="qty" value={f.qty} onChange={set("qty")}>
                {QTY.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea
              name="message"
              rows={4}
              value={f.message}
              onChange={set("message")}
              placeholder="Colours, sizes, fabric, timeline — anything that helps."
            />
          </label>
          <button className="btn btn-block" type="submit">Send enquiry</button>
          <p className={`form-status ${status.kind}`} role="status" aria-live="polite">{status.text}</p>
        </form>
      </div>
    </section>
  );
}
