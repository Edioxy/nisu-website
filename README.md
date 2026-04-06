# nisu.info — marketing site

A single static page: **black / white**, **mobile-first**, Apple-inspired typography and spacing. Source files live in **`public/`** so the same repo works with **Cloudflare Workers Static Assets** (`npx wrangler deploy`) or any static host.

## What you need to do (checklist)

### 1. Hosting (pick one)

| Host | Why |
|------|-----|
| **Cloudflare Pages** | Free SSL, fast CDN, works well with Namecheap DNS — use **static** mode if the UI allows (build empty, output `public` or `.`). |
| **Cloudflare Workers** | This repo includes `wrangler.toml` + a tiny worker so **`npx wrangler deploy`** is valid if Git integration forces that command. |
| **Vercel** | Very simple Git deploy |
| **Netlify** | Drag-and-drop `public/` contents or repo with output `public` |

Published HTML must be **`index.html` at the site root** (here that is `public/index.html` in the repo).

#### Cloudflare “connect Git” when the deploy field cannot be empty

If the wizard defaults to **`npx wrangler deploy`** and will not accept an empty deploy step, use this repo as-is:

| Field | Value |
|-------|--------|
| Root directory | `.` (repo root) |
| Build command | `npm install` |
| Deploy command | `npx wrangler deploy` |

First deploy: link the Cloudflare account in the dashboard or set `CLOUDFLARE_API_TOKEN` in Git integration secrets. The worker name in `wrangler.toml` is `nisu-website` — change `name` if you need a different Cloudflare project name.

### 2. Namecheap DNS → your host

**Important:** Email (`contact@nisu.info`) uses **MX records** at Namecheap (or Google Workspace, etc.). Those records stay as your mail provider says. The **website** only needs **A** or **CNAME** (or both) pointing to the host — it does not replace email DNS.

Typical patterns:

**If the host gives you a CNAME** (e.g. `your-project.pages.dev`):

- **Subdomain `www`:** add a **CNAME** record: `www` → `your-project.pages.dev` (or what the host specifies).
- **Root domain `nisu.info` (apex):**  
  - **Cloudflare:** use their nameservers on the domain, then they handle “CNAME flattening” for `@`.  
  - **Namecheap only:** use **URL Redirect** `nisu.info` → `https://www.nisu.info`, and put the site on `www`; *or* use an **ALIAS** record to the Pages host if your DNS panel supports it.

**If the host gives you IPv4 addresses:** add **A** records for `@` (and optionally `www`) to those IPs (Vercel/Netlify document this).

Follow the **exact** DNS instructions from Cloudflare / Vercel / Netlify after you create the project.

### 3. HTTPS

Enable SSL/TLS on the host (usually automatic). In Namecheap, turn off any conflicting “Parking” page for the same hostnames.

### 4. App Store links (when ready)

In **`public/index.html`**, near the bottom of the `<script>` block, set:

```js
var APP_STORE_RIDER = 'https://apps.apple.com/...';
var APP_STORE_DRIVER = 'https://apps.apple.com/...';
```

Redeploy or re-upload the file. Until then, **App Store** buttons stay disabled with “Coming soon on the App Store.”

### 5. Optional sync with the app repo

`../constants/nisu-brand.json` can mirror store URLs for your apps; the marketing page uses its own script for now so you can go live without a build.

---

## Local preview

**Quick static preview** (no install):

```bash
cd website/public
python3 -m http.server 8080
```

Visit `http://localhost:8080`

**Same as Cloudflare** (optional):

```bash
cd website
npm install
npx wrangler dev
```

---

## Files

- **`public/index.html`** — Entire site (HTML, CSS, minimal JS).
- **`src/worker.js`** — Pass-through to static assets for Workers deploy.
- **`wrangler.toml`** — Worker + `[assets]` → `./public`.

`npm install` only adds Wrangler for deploy/preview; the page itself has no runtime JS dependencies.
