# Growth Platform Status

Shipped: full content-driven healthcare growth architecture for Kumar's Microscopic Dental Care (Next.js 16).

## Verification (2026-07-14)

| Check | Result |
|-------|--------|
| `npm run build` | **PASS** — 59 routes, TypeScript clean |
| `npm run lint` | **PASS** |
| Canonical / metadata | Treatments, locations, doctors, blog OK; **fixed** `/appointments` (was client-only → inherited homepage canonical) |
| Schema | Hours Mon–Sat 10–21 / Sun 10–18; `areaServed` tied to `lib/locations`; **removed** invalid `EventScheduled` on MedicalProcedure; article reviewer omits when absent |
| Doctor positioning | Prem = Attur/Yelahanka kids dentist first + microscopic RCT (ex-Associate Professor Ramaiah); Roshini = crowns; AI/llms aligned |
| Sticky CTAs + analytics | Trackers wired; Book has `aria-label`; chatbot WhatsApp tracked |
| A11y | Viewport zoom allowed; focus rings on key CTAs; chatbot no longer overlaps sticky bar (emoji-only FAQ/WhatsApp CTAs cleaned) |
| LCP | Removed competing `priority` on Header logo (page heroes keep priority) |
| Internal links | Header/Footer hrefs map to existing routes (no `/locations` index; breadcrumb uses `/locations/yelahanka`) |
| `next/image` | Used on home, services, team, treatments, doctors, header |

### Hardening fixes applied this pass
1. `app/appointments/layout.tsx` — title, description, canonical, Open Graph
2. Root layout — stop exporting sitewide homepage `canonical` (pages set their own)
3. `lib/schema.ts` — drop invalid MedicalProcedure `status`; Place-typed `areaServed`; conditional article `reviewer`
4. `ChatbotWidget` — reposition vs sticky/FAB; Prem/Roshini FAQ copy; hours/address from `SITE`; WhatsApp tracking + focus styles
5. `BookingPopup` — track Book; doctor positioning copy; accessible labels/focus (removed emoji-only hero)
6. `Header` — drop logo `priority`; `StickyCtas` Book `aria-label`; home CTA focus styles

## What shipped

### Data layer
- `lib/site.ts` — clinic constants (phones, hours, address, WhatsApp, rating 4.9/250)
- `lib/doctors.ts` — Dr. Prem Kumar R + Dr. RV Roshini entity data
- `lib/treatments.ts` — 17 treatment pages with FAQs, costs, process, lead doctor
- `lib/locations.ts` — 9 unique North Bangalore location pages
- `lib/blog/posts.ts` — 11 posts (3 migrated + 8 new cluster articles)
- `lib/schema.ts` — JSON-LD helpers (Org, Person, Physician, MedicalProcedure, FAQ, Article, Breadcrumb, LocalBusiness, WebSite+SearchAction)

### Routes
- Core: `/`, `/about`, `/services`, `/team`, `/contact`, `/appointments`, `/privacy`
- New: `/terms`, `/faqs`, `/testimonials`, `/patient-resources`, `/search`
- Doctors: `/doctors/dr-prem-kumar`, `/doctors/dr-rv-roshini`
- Treatments: `/treatments/[slug]` × 17
- Locations: `/locations/[slug]` × 9
- Blog: `/blog`, `/blog/[slug]` (data-driven)
- Feeds/SEO: `/sitemap.xml`, `/robots.txt`, `/feed.xml`, `/ai-sitemap.xml`

### Conversion & UX
- Sticky mobile Call | WhatsApp | Book bar
- WhatsApp FAB + desktop Emergency Call
- Dense Footer (treatments, locations, doctors, legal)
- Header links to Pediatric Dentist + Crowns Specialist
- Appointment honeypot spam field
- Viewport zoom allowed (a11y)
- Single GA path via `NEXT_PUBLIC_GA_ID` + optional GTM + Clarity

### Tech
- `next.config.ts` — security headers (CSP), compress, avif/webp
- Analytics deduped; gtag helpers wired on CTAs
- `public/llms.txt`, `llms-full.txt`, `ai-directives.txt`, `discovery.json` updated for Prem=pediatric / Roshini=crowns entities

## Env vars needed (manual — no `.env` in workspace)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (default `https://kumarsdentistry.in`) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (`G-…`) |
| `NEXT_PUBLIC_GA4_ID` | Optional alias — same as `NEXT_PUBLIC_GA_ID` (`lib/gtag.ts` accepts either) |
| `NEXT_PUBLIC_GTM_ID` | Optional Google Tag Manager (`GTM-…`) |
| `NEXT_PUBLIC_CLARITY_ID` | Optional Microsoft Clarity |

Prefer `NEXT_PUBLIC_GA_ID`; `NEXT_PUBLIC_GA4_ID` is accepted as an alias fallback.

## Deploy on Vercel (quick path)

Full walkthrough: **[VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)**

1. Push repo to GitHub (existing remote or new)
2. Import in Vercel → Framework **Next.js**, root directory **`.`**
3. Set env vars above for **Production + Preview**
4. Add custom domain `kumarsdentistry.in` + www redirect
5. **Redeploy** after any `NEXT_PUBLIC_*` change
6. Post-deploy: GSC sitemap, GA4 Realtime on Call/WhatsApp/Book, GBP NAP/hours match

## Doctor positioning summary

- **Dr. Prem Kumar R** → Kids dentist / pediatric + microscopic RCT authority with GEO priority: **Attur + Yelahanka New Town first** → North Bangalore corridors → Bangalore-wide. Formerly Associate Professor at Ramaiah (prose + qualifications; schema uses `alumniOf` Ramaiah Dental College, not fabricated awards).
- **Dr. RV Roshini** → Bangalore crowns / bridges / prosthodontics / implants / smile design authority

## Quality notes

- Costs are Bangalore-indicative only + consult disclaimer
- Hours normalized Mon–Sat 10–9 / Sun 10–6 everywhere including schema
- No invented certificates, papers, associate-professor years, or review counts beyond 4.9/250
- Build must pass via `npm run build` before deploy

## Remaining manual steps (organic lead gen)

1. **Deploy** via [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md); set `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID` (optional GTM/Clarity).
2. **Google Search Console** — confirm property; submit `https://kumarsdentistry.in/sitemap.xml`; run URL inspection on home, Prem doctor, Attur + Yelahanka locations, children-dentistry.
3. **Rich Results Test** — validate Organization/LocalBusiness, FAQ, and MedicalProcedure JSON-LD on live URLs.
4. **Google Business Profile** — align NAP to Attur Main Road / Yelahanka New Town, hours (Mon–Sat 10–9 / Sun 10–6), categories, and services; link website + booking URL.
5. **GA4** — verify realtime events for phone / WhatsApp / appointment clicks after deploy.
6. **Internal** — optional `/locations` index hub later.
