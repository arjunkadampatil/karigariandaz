# Karigariandaz — website

Two versions of the same site, same design and content. Deploy **one** of them.

```
karigariandaz-website/
├── static/          ← Plain HTML/CSS/JS. No build step. Easiest.
│   ├── index.html
│   ├── css/styles.css
│   ├── js/data.js       ← all text, products, FAQs, email  ✏️
│   ├── js/art.js        ← the hand-drawn SVG motifs
│   ├── js/enquiry.js    ← enquiry form → email
│   ├── js/main.js
│   ├── images/          ← put real product photos here
│   └── favicon.svg
└── react/           ← React + Vite. Needs `npm run build`.
    ├── src/content/data.js   ← same content file  ✏️
    ├── src/components/*.jsx  ← one file per section
    ├── src/styles.css
    └── public/images/        ← real product photos here
```

---

## Step 0 — Before you deploy (5 minutes)

1. **Set the enquiry email.** Open `static/js/data.js` (or `react/src/content/data.js`) and change
   `enquiryEmail: "su-24022@sitare.org"` to your business inbox. The enquiry form, the footer and the
   "write to us" message all use this one value.
2. **Edit products** in the `PRODUCTS` list in the same file — name, fabric, stitches, note.
3. **Real photos (optional).** Copy a photo into `static/images/` and add `image: "images/kurta-1.jpg",`
   to that product. For React, put it in `react/public/images/` and write `image: "/images/kurta-1.jpg",`.
   Use portrait photos (about 1000×1040 px), compressed under 300 KB (squoosh.app does this for free).
4. **Colours** live at the top of `css/styles.css` under `:root` — change `--maroon` to re-theme everything.

## Step 1 — Try it on your laptop

**Static version** — ES modules need a local server, so double-clicking `index.html` will show a blank page.
```bash
cd static
python -m http.server 8080        # then open http://localhost:8080
```
(or in VS Code: install the "Live Server" extension → right-click `index.html` → *Open with Live Server*)

**React version** — needs Node.js 18 or newer (nodejs.org).
```bash
cd react
npm install
npm run dev                       # then open http://localhost:5173
```

## Step 2 — Put the code on GitHub

1. Go to github.com → **New repository** → name it `karigariandaz` → Public → **Create**.
2. In a terminal inside the `karigariandaz-website` folder:
```bash
git init
git add .
git commit -m "Karigariandaz website"
git branch -M main
git remote add origin https://github.com/<your-username>/karigariandaz.git
git push -u origin main
```
(No terminal? On the new repo page click **uploading an existing file** and drag the folders in.)

## Step 3 — Deploy (pick ONE host)

### Option A — Render (you already use it for karigariandaz.onrender.com)
1. dashboard.render.com → **New +** → **Static Site** → connect your GitHub → pick the `karigariandaz` repo.
2. Fill in:

| Setting | Static version | React version |
|---|---|---|
| Root Directory | `static` | `react` |
| Build Command | *(leave empty)* | `npm install && npm run build` |
| Publish Directory | `.` | `dist` |

3. **Create Static Site.** In 1–2 minutes you get a `*.onrender.com` link.
4. To keep the name **karigariandaz.onrender.com**: open your old service → **Settings** → delete or rename it
   first, then name the new static site `karigariandaz`. Static sites on Render are free and don't sleep.

### Option B — Netlify (fastest, no GitHub needed)
- **Static:** go to app.netlify.com/drop and drag the `static` folder onto the page. Done.
- **React:** run `npm run build` inside `react`, then drag the `react/dist` folder onto app.netlify.com/drop.
- With GitHub instead: **Add new site → Import from Git** → base directory `react`, build `npm run build`, publish `react/dist`.

### Option C — Vercel
vercel.com → **Add New → Project** → import the repo → **Root Directory**: `static` or `react`.
For React, Vercel detects Vite automatically. Click **Deploy**.

### Option D — GitHub Pages (static version only)
Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)`.
Pages can only serve the repo root or `/docs`, so for this option rename the `static` folder to `docs`
and choose `/docs`. The site appears at `https://<username>.github.io/karigariandaz/`.

## Step 4 — Every update after that
Edit files → `git add . && git commit -m "update" && git push`. Render, Netlify (Git) and Vercel rebuild
automatically within a minute or two.

## Step 5 — Custom domain (when you buy one)
Buy `karigariandaz.com` (or `.in`) from any registrar → in your host's dashboard open **Custom Domains**
→ add the domain → copy the DNS records it shows (a CNAME for `www`, an A/ALIAS for the root) into the
registrar's DNS page. HTTPS is issued automatically.

---

### How the enquiry form works
There is no server. On *Send*, the form checks name, email and country, then opens the visitor's own
email app with a pre-filled message to `enquiryEmail`. Buttons like "Enquire about this" and
"Start a wholesale enquiry" pre-select the product and customer type.
If you later want submissions to arrive without the visitor's email app, sign up at formspree.io, create a
form, and replace `window.location.href = buildMailto(f)` with a `fetch()` POST to your Formspree URL.
