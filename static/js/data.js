// ─────────────────────────────────────────────────────────────
//  Karigariandaz — site content
//  Edit text, products and FAQs here. Both the static site and
//  the React version read from this same file.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Karigariandaz",
  hindi: "कारीगरी अंदाज़",
  tagline: "Handstitched in Lucknow. Discovered by the world.",
  // Every enquiry form opens the visitor's email app addressed to this inbox.
  // Change it to your business address before going live.
  enquiryEmail: "karigariandaz@gmail.com",
  city: "Lucknow, Uttar Pradesh, India",
};

export const STITCHES = [
  {
    name: "Tepchi",
    hindi: "टेपची",
    text: "A long running stitch worked on the right side of the fabric. It outlines shapes and fills large areas with fine parallel lines — usually the first stitch a karigar learns.",
    type: "running",
  },
  {
    name: "Bakhia",
    hindi: "बखिया",
    text: "The famous shadow work. Herringbone stitches are worked on the reverse, so the thread glows through sheer mulmul or georgette as a soft, opaque fill.",
    type: "shadow",
  },
  {
    name: "Phanda",
    hindi: "फंदा",
    text: "Tiny, tight knots shaped like millet grains, clustered to form the centres of flowers. Dense phanda work is a mark of a patient, experienced hand.",
    type: "knot",
  },
  {
    name: "Murri",
    hindi: "मुर्री",
    text: "Rice-shaped knots, slightly longer than phanda, used for petals and buds. Fine murri is one of the hardest stitches to do evenly.",
    type: "grain",
  },
  {
    name: "Jaali",
    hindi: "जाली",
    text: "Net work. Threads of the fabric are teased apart with a needle — never cut — and held in place to make a lace-like window inside the cloth.",
    type: "net",
  },
  {
    name: "Keel Kangan",
    hindi: "कील कंगन",
    text: "Small radiating stitches that form a ring, like a bangle with a nail at its centre. Used for little flowers scattered across a kurta.",
    type: "ring",
  },
  {
    name: "Hool",
    hindi: "हूल",
    text: "A fine detached eyelet: a hole is pierced and stitched around, then the centre is filled with tiny radiating stitches.",
    type: "eyelet",
  },
  {
    name: "Zanjeera",
    hindi: "ज़ंजीरा",
    text: "A small chain stitch used to outline leaves and petals after the main filling stitches are done, giving the motif a crisp edge.",
    type: "chain",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Chhapai — printing",
    text: "The design is carved into wooden blocks and printed onto the cut fabric with a washable blue dye. This is the map the embroiderer follows.",
  },
  {
    step: "02",
    title: "Kadhai — embroidery",
    text: "The printed cloth goes to karigars, most of them women working from home in and around Lucknow. A single kurta can take from a few days to several weeks.",
  },
  {
    step: "03",
    title: "Dhulai — washing",
    text: "Finished pieces are soaked, washed and sun-dried to remove the blue print lines and any starch, leaving only the thread work.",
  },
  {
    step: "04",
    title: "Finishing",
    text: "Pieces are starched where needed, ironed, checked for loose ends and stitched into the final garment.",
  },
  {
    step: "05",
    title: "Our check",
    text: "Before a piece is listed or shipped, we confirm it is hand-embroidered, note the workshop it came from, and record the fabric and stitches used.",
  },
];

export const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "women", label: "Women" },
  { id: "men", label: "Men" },
  { id: "drapes", label: "Sarees & Dupattas" },
  { id: "home", label: "Home Linen" },
];

// palette: [background, thread] — used to draw each card's motif artwork
// To show a real photo instead, add  image: "images/your-photo.jpg"  to a product
// (static site: put the file in static/images/ · React: put it in react/public/images/ and use "/images/your-photo.jpg")
export const PRODUCTS = [
  {
    id: "k1",
    cat: "women",
    name: "Mulmul Straight Kurta",
    fabric: "Cotton mulmul",
    stitches: "Tepchi, bakhia, phanda",
    note: "Everyday wear, breathable in summer heat",
    palette: ["#f4ede1", "#762f2f"],
    motif: "buta",
  },
  {
    id: "k2",
    cat: "women",
    name: "Georgette Anarkali",
    fabric: "Georgette",
    stitches: "Bakhia, murri, jaali",
    note: "Full flare with all-over shadow work",
    palette: ["#e7d6d2", "#5b2323"],
    motif: "jaal",
  },
  {
    id: "k3",
    cat: "women",
    name: "Chanderi Short Kurti",
    fabric: "Chanderi silk-cotton",
    stitches: "Keel kangan, tepchi",
    note: "Light sheen, scattered booti",
    palette: ["#efe3c8", "#8a6a2b"],
    motif: "booti",
  },
  {
    id: "m1",
    cat: "men",
    name: "Men's Cotton Kurta",
    fabric: "Cotton cambric",
    stitches: "Tepchi, zanjeera",
    note: "Placket and cuff embroidery",
    palette: ["#e9ece6", "#2f4a3a"],
    motif: "placket",
  },
  {
    id: "m2",
    cat: "men",
    name: "Festive Kurta Set",
    fabric: "Silk-cotton blend",
    stitches: "Bakhia, phanda, hool",
    note: "Kurta with matching pyjama",
    palette: ["#ede4d6", "#4a3426"],
    motif: "buta",
  },
  {
    id: "d1",
    cat: "drapes",
    name: "Chikankari Saree",
    fabric: "Georgette / chiffon",
    stitches: "Bakhia, jaali, murri",
    note: "Heavy border with all-over booti",
    palette: ["#f1e6e3", "#762f2f"],
    motif: "border",
  },
  {
    id: "d2",
    cat: "drapes",
    name: "Mulmul Dupatta",
    fabric: "Cotton mulmul",
    stitches: "Tepchi, keel kangan",
    note: "Four-side border, soft drape",
    palette: ["#f4efe4", "#6b5a3a"],
    motif: "border",
  },
  {
    id: "h1",
    cat: "home",
    name: "Cushion Covers",
    fabric: "Cotton / linen",
    stitches: "Bakhia, phanda",
    note: "Sold in sets, standard sizes",
    palette: ["#ebe5da", "#3e4a5b"],
    motif: "medallion",
  },
  {
    id: "h2",
    cat: "home",
    name: "Table Runner & Linen",
    fabric: "Cotton voile",
    stitches: "Jaali, tepchi, zanjeera",
    note: "Runners, napkins and covers",
    palette: ["#f2ece0", "#762f2f"],
    motif: "jaal",
  },
];

export const VERIFY = [
  {
    title: "Visited in person",
    text: "Every workshop on Karigariandaz has been visited by us in Lucknow. We meet the owner, see where the work is done and talk to the people doing it.",
  },
  {
    title: "Hand-embroidery confirmed",
    text: "We check the reverse of the fabric. Hand chikan shows small irregularities, knots and thread ends; machine copies are perfectly uniform.",
  },
  {
    title: "Workshop named on every order",
    text: "You know which workshop made your piece and where it is. No anonymous supply chain, no unnamed middlemen.",
  },
  {
    title: "Fabric declared honestly",
    text: "Pure cotton is called cotton, blends are called blends. We record the fabric of every piece before it is listed.",
  },
];

export const SPOT_FAKE = [
  ["Turn it over", "Hand work has small knots and loose ends on the back. Machine embroidery looks almost as neat on the back as on the front."],
  ["Look for variation", "No two hand-stitched flowers are exactly the same. Perfectly repeated motifs are usually machine-made."],
  ["Check for blue lines", "Faint traces of the blue printing dye near the stitches, on an unwashed piece, show it was block-printed and hand-embroidered."],
  ["Feel the shadow work", "Real bakhia is worked from the back, so you can feel the herringbone crossing behind sheer fabric."],
];

export const FAQ = [
  {
    q: "Do you sell to individual customers or only to stores?",
    a: "Both. Retailers and boutiques can source in bulk, and individual customers can order single pieces. Use the enquiry form and tell us which one you are.",
  },
  {
    q: "Is there a minimum order quantity for retailers?",
    a: "Minimums depend on the workshop and the design. Many workshops can start with a small first order so you can test the product with your customers before scaling up.",
  },
  {
    q: "Can I get samples before placing a bulk order?",
    a: "Yes. We arrange samples from the workshop you are interested in so you can check fabric, finish and sizing first.",
  },
  {
    q: "Can workshops make custom colours, sizes or designs?",
    a: "Most workshops can dye fabric to a colour you choose and adjust sizing. New designs need a fresh printing block, which adds time — we will tell you how much before you confirm.",
  },
  {
    q: "How long does an order take?",
    a: "Hand embroidery is slow by nature. A simple kurta can be ready in a couple of weeks; heavily worked sarees and bulk orders take longer. We give you a timeline from the workshop before you pay.",
  },
  {
    q: "Do you ship outside India?",
    a: "Yes. Karigariandaz was started to bring Lucknow Chikankari to buyers outside India. Tell us your country in the enquiry form and we will share shipping options and costs.",
  },
  {
    q: "How should Chikankari be washed?",
    a: "Gentle hand wash in cold water with mild detergent, no wringing, dry in shade. Starched pieces can be dry-cleaned to keep their crispness.",
  },
];

export const STATS = [
  { value: 20, suffix: "+", label: "workshops and shops visited across Lucknow" },
  { value: 10, suffix: "", label: "in-depth conversations with workshop owners" },
  { value: 10, suffix: "", label: "wholesale shops studied in Chowk market" },
  { value: 2008, suffix: "", label: "year Lucknow Chikankari received its GI tag", plain: true },
];
