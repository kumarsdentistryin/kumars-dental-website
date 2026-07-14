# Vercel Deploy + Environment Variables

Step-by-step production deploy for Kumar's Microscopic Dental Care (Next.js).

## 1. Push the repo to GitHub

Use the existing remote if you already have one:

```bash
git status
git remote -v
git push -u origin HEAD
```

Or create a new GitHub repo and push this project as the first commit.

## 2. Import the project in Vercel

1. Open [vercel.com](https://vercel.com) → **Add New…** → **Project**
2. Import the GitHub repository for this site
3. Confirm settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `.` (repository root)
   - **Build Command:** `npm run build` (default)
   - **Output:** Next.js default (do not override)

## 3. Set Environment Variables (Production + Preview)

In the Vercel project → **Settings** → **Environment Variables**, add these for **Production** and **Preview** (and Development if you use `vercel env pull`):

| Variable | Required | Example / notes |
|----------|----------|-----------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | `https://kumarsdentistry.in` (or your `*.vercel.app` URL until custom domain is live) |
| `NEXT_PUBLIC_GA_ID` | Yes (for analytics) | `G-8NQLGTZ1XK` (already in `.env.production`; confirm same value in Vercel if you also set it there) |
| `NEXT_PUBLIC_GA4_ID` | Optional alias | Same value as `NEXT_PUBLIC_GA_ID` if you prefer this name — code accepts either (`lib/gtag.ts`) |
| `NEXT_PUBLIC_GTM_ID` | Optional | `GTM-XXXXXXX` — leave unset if unused |
| `NEXT_PUBLIC_CLARITY_ID` | Optional | Microsoft Clarity project ID — leave unset if unused |

**Code alignment (do not invent different names):**

- Site canonical: `process.env.NEXT_PUBLIC_SITE_URL` → `lib/site.ts`
- GA4: `NEXT_PUBLIC_GA_ID` **or** `NEXT_PUBLIC_GA4_ID` → `lib/gtag.ts` / `components/Analytics.tsx`
- GTM: `NEXT_PUBLIC_GTM_ID` → `components/Analytics.tsx` + `app/layout.tsx`
- Clarity: `NEXT_PUBLIC_CLARITY_ID` → `components/Analytics.tsx`

Placeholder values like `G-XXXXXXXXXX` or `GTM-XXXXXXX` are ignored by analytics code.

## 4. Deploy

Click **Deploy** (first import) or push to the connected branch. Wait for the build to succeed (`npm run build` must pass locally first).

## 5. Custom domain

1. Vercel project → **Settings** → **Domains**
2. Add `kumarsdentistry.in`
3. Add `www.kumarsdentistry.in` and configure **redirect www → apex** (or apex → www — pick one canonical; site default is `https://kumarsdentistry.in`)
4. Follow DNS instructions at your registrar (A/CNAME as Vercel shows)
5. Ensure `NEXT_PUBLIC_SITE_URL=https://kumarsdentistry.in` once the domain is verified

## 6. Redeploy after env changes

Environment variables are baked into the Next.js client bundle at build time. After adding or changing any `NEXT_PUBLIC_*` key:

1. Save variables in Vercel
2. **Deployments** → latest → **Redeploy** (or push an empty commit / re-run deployment)

## 7. Post-deploy checklist

- [ ] Open live site; confirm header, CTAs, and doctor pages load
- [ ] Submit `https://kumarsdentistry.in/sitemap.xml` in Google Search Console
- [ ] GA4 **Realtime**: click Call / WhatsApp / Book and confirm events
- [ ] Google Business Profile: hours (Mon–Sat 10–9 / Sun 10–6), NAP match Attur Main Road / Yelahanka New Town address
- [ ] Spot-check `/doctors/dr-prem-kumar`, `/locations/attur`, `/treatments/children-dentistry`

## Optional local check before push

```bash
npm run build
```
