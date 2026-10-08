# The 90s Club — Taproom and Kitchen

Site for **The 90s Club** (Maps name) / **The 90s Club Taproom and Kitchen**, Millennium Plaza, Hebbagodi, Electronic City, Bangalore.

Visual system follows the Luxdin hospitality layout: Cormorant Garamond headings, Inter body, ivory pages, Club Gold pills, and full-bleed venue photography. Next.js App Router, not a Framer file.

English only. Phone locked to **+91 96321 48811**.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

```bash
npm run lint
npm run check-copy
npm run build
npm start
```

`npm start` also uses port 3847.

## Pages

| URL | Role |
|---|---|
| `/` | Hero, menu categories, rooftop pub, signatures, visit, FAQ, reviews |
| `/menu` | Full food card with prices; drinks and offers by enquiry |
| `/kerala-food` | Kerala kitchen and signatures |
| `/rooftop-pub` | Rooftop pub, AC dining, Flying Fox, busy nights, parking |
| `/visit` | NAP, map, hours, phone, parking, catchment. `/contact` 301s here |
| `/occasions` | Team lunch and birthdays |
| `/about` | Akhil and Sathish, February 2026 |
| `/craft-beer` | Flying Fox; current tap list and prices by enquiry |

## Deploy on Vercel

Pushing to `main` deploys to [https://the90-s-club.vercel.app](https://the90-s-club.vercel.app). Canonical, sitemap, and JSON-LD use that origin unless `NEXT_PUBLIC_SITE_URL` is set.

## Photos, logo, icons

Photographs in `public/photos/` are enhanced versions of the client Photo Drive frames (assets-v2). Filenames are stable so later replacements can drop in.

There is no rooftop or open-sky photograph. Copy may still say rooftop pub. Image alt text describes the interior that is shown.

The official gold logo lives in `public/brand/` and is not redrawn.

App icons: `app/favicon.ico`, `app/icon.svg`, `app/apple-icon.png`, plus `public/icon-192.png`, `public/icon-512.png`, `public/maskable-512.png`, `public/og-image.jpg`, and `public/site.webmanifest`. Theme colour is `#0A0907`.

## Copy rules

Keep Call, Directions, WhatsApp, and Instagram as the only actions. Do not add Swiggy or Zomato.

Do not write microbrewery, brewery, nightclub, multi-cuisine headlines, competitor names, Mangalore dishes, award claims, or “best bar”. Live music, karaoke, and dancing stay as facts on the rooftop and visit pages.

Hours on the site are 12 pm–12 am every day.

`npm run check-copy` scans `app`, `components`, and `lib` for the hard never-say list.
