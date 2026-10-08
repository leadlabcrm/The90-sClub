# The 90s Club — Taproom and Kitchen

Staging draft for **The 90s Club** (Maps name) / **The 90s Club Taproom and Kitchen**, Millennium Plaza, Hebbagodi, Electronic City, Bangalore.

The visual system remixes the locked Mulligans hospitality template for The 90s Club: Fraunces/Oswald typography, full-bleed venue photography, compact floating chrome, cream/blue/gold cards, offset borders, ticker bands, rounded CTA panels, and mobile sticky actions. It is a Next.js implementation rather than a Framer file.

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
| `/` | SEO wireframe order — hero, intent doors, proof, dish hooks, wedge, rooftop, Kerala, beer, occasions, NAP, FAQ, Instagram |
| `/menu` | Full food card with prices as HTML text; current drinks and offers by direct enquiry |
| `/kerala-food` | Kerala kitchen and signatures |
| `/rooftop-pub` | Rooftop, AC dining, Flying Fox, busy nights, parking, Google listing attributes |
| `/visit` | NAP, map, hours, phone, parking, catchment. Contact lives here |
| `/occasions` | Team lunch and birthdays |
| `/about` | Akhil and Sathish, February 2026 |
| `/craft-beer` | Flying Fox; current tap list and prices by direct enquiry |

`/mangalore-food` is not in this build.

## Deploy on Vercel

1. Import this repo in Vercel. Framework preset: Next.js. No extra build command.
2. After the first deploy, set `NEXT_PUBLIC_SITE_URL` to the staging URL (no trailing slash). See `.env.example`. Redeploy so canonicals, `sitemap.xml`, Open Graph, and Restaurant JSON-LD use that origin.
3. When a real domain is registered, point it at the Vercel project and update `NEXT_PUBLIC_SITE_URL` again.

## Google Business Profile website field

1. Confirm the staging URL loads on a phone: call, directions, WhatsApp, and the menu.
2. In the Google Business Profile for **The 90s Club**, set the website field to that URL.
3. Keep the profile phone as **+91 96321 48811**. Do not put 41188 back.
4. Search Console is still uncreated. Add the property after the domain exists.

JSON-LD `name` is the Maps name **The 90s Club**. `alternateName` is **The 90s Club Taproom and Kitchen**. Confirm that pair stays 1:1 with the profile before the site is treated as final. There is no latitude/longitude in the schema; Directions uses the profile share link `https://share.google/IelhjSarfxq2uls3r`. The embedded map is an address search, not a claimed pin.

## Photos and logo

The photographs in `public/photos/` came from the client Photo Drive: [venue folder](https://drive.google.com/drive/folders/1y_tTNOiu8BlUcsOT6ngYuHZU6FVFroLc?usp=sharing). They cover the bar, neon interior, stage screen, Hosur Road signboard, kitchen plates, and three cocktails.

Still missing from that set:

- A true rooftop / open-terrace photograph. Copy can still describe the rooftop. Image alt text describes the interior that is actually shown.
- A beer-tap or Flying Fox product shot. The craft-beer page uses the neon beer-wall and the bar counter only.
- Plated photos of coconut fish curry, Naadan chicken curry, and the prawn starters.
- Founders portraits and the official vector logo file. The current clean SVG lockup recreates the venue’s arched sunburst, serif “90s,” and CLUB lettering from the supplied photographs.

## Open gaps

- **Drinks and beer.** No tap list, styles, ABV, or drink prices. `/menu` and `/craft-beer` direct visitors to confirm the current list with the team.
- **Offers.** The pack mentioned BOGO and a bucket at ₹999. Those are not published. Add them only after the team confirms the live wording.
- **Hours.** Published close is 12:00 am every day. A later event close is not used.
- **Domain.** None yet.
- **Photos still needed.** Rooftop terrace, beer taps / Flying Fox product, prawn and fish close-ups, founders, logo file.
- **Schema name.** Short Maps name, pending a final profile check.
- **Parking.** “Parking is available” only. No gate or fee instructions.
- **Price for two.** The menu intro says ₹400–₹1,000 from the client snapshot, not from a new calculation.
- **Reviews.** The home strip says “About 4.7 on Google”. No review count is shown.
- **Akhil.** The visit page notes that Akhil takes calls after 12 pm.

## Copy rules for later edits

Keep Call, Directions, WhatsApp, and Instagram as the only actions. Do not add Swiggy or Zomato.

Do not write microbrewery, brewery, nightclub, multi-cuisine headlines, competitor names, Mangalore dishes, award claims, or “best bar”. Live music, karaoke, and dancing stay as facts on the rooftop and visit pages.

`npm run check-copy` scans `app`, `components`, and `lib` for the hard never-say list.

Food names follow the approved card, with readable spellings: Prawns Ghee Roast, Chicken Manchurian, Chicken Fried Rice Classic.
