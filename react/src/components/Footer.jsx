import { SITE } from "../content/data.js";

export default function Footer({ onEnquire }) {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">{SITE.name}</p>
          <p className="deva footer-deva">{SITE.hindi}</p>
          <p className="muted">{SITE.tagline}</p>
        </div>
        <div>
          <p className="footer-h">Explore</p>
          <a href="#craft">The Craft</a>
          <a href="#collections">Collections</a>
          <a href="#verified">Verification</a>
          <a href="#story">Our Story</a>
        </div>
        <div>
          <p className="footer-h">Work with us</p>
          <a href="#enquire" onClick={() => onEnquire("Retailer / Boutique")}>Wholesale sourcing</a>
          <a href="#enquire" onClick={() => onEnquire("Individual customer")}>Individual orders</a>
          <a href="#enquire" onClick={() => onEnquire("Workshop owner")}>Workshops — get listed</a>
        </div>
        <div>
          <p className="footer-h">Based in</p>
          <p className="muted">{SITE.city}</p>
          <a href={`mailto:${SITE.enquiryEmail}`}>{SITE.enquiryEmail}</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} {SITE.name}</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
