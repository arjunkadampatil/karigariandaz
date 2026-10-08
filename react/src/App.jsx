import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Promise from "./components/Promise.jsx";
import Craft from "./components/Craft.jsx";
import Process from "./components/Process.jsx";
import Collections from "./components/Collections.jsx";
import Paths from "./components/Paths.jsx";
import Verified from "./components/Verified.jsx";
import Story from "./components/Story.jsx";
import Faq from "./components/Faq.jsx";
import Enquiry from "./components/Enquiry.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Buttons around the site can pre-fill the enquiry form
  const [prefill, setPrefill] = useState({ type: "Retailer / Boutique", item: "Not sure yet", n: 0 });
  const enquire = (patch) => setPrefill((p) => ({ ...p, ...patch, n: p.n + 1 }));

  // Fade sections in as they scroll into view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          en.target.classList.add("in");
          en.target.dispatchEvent(new CustomEvent("revealed"));
          io.unobserve(en.target);
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Promise />
        <Craft />
        <Process />
        <Collections onEnquire={(item) => enquire({ item })} />
        <Paths onEnquire={(type) => enquire({ type })} />
        <Verified />
        <Story />
        <Faq />
        <Enquiry prefill={prefill} />
      </main>
      <Footer onEnquire={(type) => enquire({ type })} />
    </>
  );
}
