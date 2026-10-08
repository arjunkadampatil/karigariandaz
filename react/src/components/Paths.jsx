const RETAIL = [
  "Choose from verified workshops, each with its own speciality",
  "Order samples before you commit to a bulk order",
  "Custom colours, sizes and, with time, new designs",
  "Small first orders to test with your customers",
  "Workshop details shared with every order",
  "Shipping to your country, with costs quoted upfront",
];
const INDIVIDUAL = [
  "Order single kurtas, sarees, dupattas or linen",
  "Know which workshop made your piece",
  "Sizing help before the piece is cut",
  "Care instructions with every order",
  "Shipped to you anywhere in the world",
];

export default function Paths({ onEnquire }) {
  return (
    <section className="section paths" id="retailers">
      <div className="wrap paths-grid">
        <article className="path path-dark reveal">
          <p className="eyebrow">For retailers &amp; boutiques</p>
          <h2>Source direct from the workshop</h2>
          <ul className="ticks">{RETAIL.map((t) => <li key={t}>{t}</li>)}</ul>
          <a href="#enquire" className="btn btn-light" onClick={() => onEnquire("Retailer / Boutique")}>
            Start a wholesale enquiry
          </a>
        </article>
        <article className="path reveal">
          <p className="eyebrow">For individual customers</p>
          <h2>One piece, made by a known hand</h2>
          <ul className="ticks">{INDIVIDUAL.map((t) => <li key={t}>{t}</li>)}</ul>
          <a href="#enquire" className="btn" onClick={() => onEnquire("Individual customer")}>
            Ask about a piece
          </a>
        </article>
      </div>
    </section>
  );
}
