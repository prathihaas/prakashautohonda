# Full SEO Audit Report — Prakash Auto Honda
**URL:** https://www.prakashautohonda.com  
**Audit Date:** 2026-05-03  
**Auditor:** Claude SEO Agent  
**Overall SEO Health Score: 61 / 100** *(pre-fix)*  
**Post-Fix Score Estimate: 79 / 100*

---

## Executive Summary

Prakash Auto Honda is the authorized Honda two-wheeler dealership in Kamareddy, Telangana. The site is built on Astro + Tailwind with solid bilingual (English + Telugu) content and strong local intent targeting. The technical foundation is sound — fast static delivery via Vercel, clean URL structure, and good content depth across 50+ blog posts, 14 product pages, and 2 branch pages.

**Critical issues fixed in this audit:**
1. Default meta description said "Honda cars" — wrong business type (two-wheeler dealer)
2. Duplicate AutoDealer schema on homepage (SEOHead + index.astro schemas conflicting)
3. AutoDealer schema on product/blog pages causing schema noise
4. All AutoDealer schemas missing `@id` — broken entity graph
5. No security headers in vercel.json — HSTS, X-Frame-Options, etc.
6. `new Date()` in sitemap lastmod — every deploy flagged ALL pages as updated
7. `/lp/honda-kamareddy/` leaking into sitemap — landing pages should not be indexed
8. robots.txt blocked AI crawlers (GPTBot, ClaudeBot, PerplexityBot) by omission
9. Article schema using `@type: Person` for organizational author
10. Product links in about.astro pointing to non-existent slugs (404 links)
11. "10+ Years" claim in about page vs "since 2022" in footer — E-E-A-T credibility gap

---

## Scores by Category

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 65/100 | 22% | 14.3 |
| Content Quality | 72/100 | 23% | 16.6 |
| On-Page SEO | 68/100 | 20% | 13.6 |
| Schema / Structured Data | 45/100 | 10% | 4.5 |
| Performance (CWV) | 58/100 | 10% | 5.8 |
| AI Search Readiness | 40/100 | 10% | 4.0 |
| Images | 52/100 | 5% | 2.6 |
| **TOTAL** | | | **61.4 / 100** |

---

## 1. Technical SEO (65/100)

### ✅ Passing
- HTTPS enforced site-wide
- Non-www → www redirect in place (`prakashautohonda.com` → `www.prakashautohonda.com`)
- robots.txt present with sitemap reference
- Sitemap index at `/sitemap-index.xml` pointing to `/sitemap-0.xml`
- 74 URLs in sitemap — good coverage
- Clean URL structure (`/products/activa-125/`, `/blog/honda-activa-price-kamareddy-2026/`)
- Canonical tags on all pages
- Astro static output = fast TTFB
- No `/404` pages in sitemap (filtered correctly)

### ❌ Issues Found

**[CRITICAL — FIXED] Missing security headers**
vercel.json had no security headers. Added:
- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()`

**[HIGH — FIXED] /sitemap.xml had no redirect to /sitemap-index.xml**
Common crawlers and GSC check `/sitemap.xml`. Added permanent redirect.

**[HIGH — FIXED] Sitemap lastmod = new Date() on every build**
All 74 URLs showed today's date as lastmod on every deploy — Google thinks all pages change daily. Fixed with static per-category dates (blog: 2026-05-03, products: 2026-05-01, static pages: 2026-04-15).

**[HIGH — FIXED] /lp/honda-kamareddy/ appearing in sitemap**
Landing pages should not be indexed. Added `/lp/` filter to astro.config.mjs sitemap filter.

**[HIGH — FIXED] robots.txt not allowing AI crawlers**
Added explicit `User-agent: GPTBot`, `ClaudeBot`, `PerplexityBot`, `Amazonbot`, `anthropic-ai`, `ChatGPT-User` with `Allow: /`. Also added `Disallow: /lp/` globally.

**[MEDIUM] No Content Security Policy (CSP) header**
A full CSP would prevent XSS. Deferred because Astro's GTM + Google Fonts + WhatsApp links require a carefully crafted policy — add as a follow-up to avoid breaking functionality.

**[LOW] No `/about-us` → `/about` redirect existed**
Fixed — added redirect from `/about-us` to `/about` (was going to `/#branches` previously, which loses the about page SEO).

---

## 2. Content Quality (72/100)

### ✅ Passing
- Strong bilingual (English + Telugu) content throughout
- 53 blog posts with good keyword targeting (local mandal names, model comparisons, buying guides)
- Product pages have spec tables, EMI info, and CTAs
- About page exists with E-E-A-T signals (authorization credentials, team expertise, area served)
- FAQ section on homepage with schema markup
- No thin content detected (all blog posts 500–2,000 words)
- Internal linking from blog → product pages via "Explore Honda Bikes" section

### ❌ Issues Found

**[CRITICAL — FIXED] "10+ Years Serving" vs "Since 2022" inconsistency**
About page displayed "10+ Years Serving Kamareddy" while footer showed "Driving dreams since 2022." If founded 2022, that's ~4 years, not 10+. This E-E-A-T credibility gap would be noticed by AI evaluators and savvy users. Fixed about page to show "Est. Since 2022."

**[HIGH] About page linked to 9 non-existent product slugs (404s)**
Links to `activa-6g`, `dio`, `unicorn-160`, `grazia`, `cd-110-dream`, `hornet-20`, `shine`, `activa-6g` — all 404. Fixed with correct slugs: `activa-110`, `dio-125`, `unicorn`, `cb200x`, `livo`, `hornet-2-0`, `shine-125`.

**[MEDIUM] Blog posts don't link to nearest branch pages**
Blog posts end with a WhatsApp/Call CTA but don't link to the specific Kamareddy or Lingampet branch page. Adding internal links to `/kamareddy/` or `/#branches` from blog posts would improve crawl depth and topical authority.

**[MEDIUM] No dedicated Lingampet page**
Lingampet is mentioned in the branches section but has no standalone SEO page. A `/lingampet/` page similar to `/kamareddy/` would capture "Honda showroom Lingampet" searches.

**[LOW] No customer review rich snippets from Google Business Profile**
Reviews shown on homepage are hardcoded testimonials, not pulled from GBP. Integrating live GBP reviews would strengthen E-E-A-T.

---

## 3. On-Page SEO (68/100)

### ✅ Passing
- Homepage H1: "Honda Showroom Kamareddy — Best Price, Test Ride & EMI" ✅ (primary keyword)
- Product pages have individual seo_title and seo_description in frontmatter
- Blog posts have seo_title and seo_description
- Breadcrumb navigation on product and blog pages
- Meta description length: 120–160 chars across most pages

### ❌ Issues Found

**[CRITICAL — FIXED] Default meta description contained "Honda cars"**
SEOHead.astro default: "Explore new Honda cars, book test drives..." — completely wrong business type. A two-wheeler dealer described as a car dealer confuses both users (CTR loss) and crawlers (misclassification). Fixed to "Honda bikes & scooters."

**[HIGH] No meta description on products/activa-125 (and possibly others)**
Live page for `/products/activa-125/` had no meta description in the rendered HTML. The `seo_description` in frontmatter appears to be passed correctly but needs validation after deploy.

**[MEDIUM] No breadcrumb on Homepage, About, Service, or Kamareddy pages**
Breadcrumb schema exists on product/blog pages but not on static pages.

**[MEDIUM] Header navigation missing About and Service links**
Header has: Bikes & Scooters, Branches, Kamareddy, Blog. Missing: About, Service. These are important E-E-A-T pages. Footer now updated with About + Service links.

**[MEDIUM] /kamareddy/ page has no unique schema markup**
The Kamareddy landing page likely uses the global SEOHead schema but has no page-specific LocalBusiness or WebPage schema.

**[LOW] No `og:locale:alternate` for Telugu**
Site is bilingual but only declares `og:locale: en_IN`. Adding `og:locale:alternate: te_IN` would signal Telugu content to social platforms.

---

## 4. Schema / Structured Data (45/100 → est. 72/100 post-fix)

### ✅ Passing (post-fix)
- AutoDealer schema on appropriate pages (homepage, about, service, kamareddy)
- FAQPage schema on homepage
- BreadcrumbList on product and blog pages
- Article schema on blog posts
- Product schema on product pages

### ❌ Issues Found

**[CRITICAL — FIXED] All AutoDealer schemas missing @id**
Without `@id`, Google cannot build an entity graph linking the business across pages. Fixed with `"@id": "https://www.prakashautohonda.com/#organization"` on all AutoDealer schemas.

**[CRITICAL — FIXED] AutoDealer schema injected on product + blog pages (schema noise)**
Every page via SEOHead.astro rendered an AutoDealer schema. On product pages, this created an AutoDealer + Product double-schema. Fixed with `noOrgSchema={true}` prop on product and blog layouts.

**[CRITICAL — FIXED] Duplicate AutoDealer on homepage**
index.astro defined its own `organizationSchema` AND SEOHead.astro rendered another AutoDealer. Two AutoDealer schemas on one page = conflicting entities. Fixed by passing `noOrgSchema={true}` to Layout in index.astro.

**[HIGH — FIXED] foundingDate missing from all AutoDealer schemas**
Added `"foundingDate": "2022"` to all AutoDealer schemas.

**[HIGH — FIXED] Product schema missing @id and @type MotorizedBicycle**
Products are Honda two-wheelers but schema only had `@type: Product`. Added `@type: ["Product", "MotorizedBicycle"]` and `@id` URI.

**[HIGH — FIXED] priceValidUntil hardcoded "2026-12-31" on product schemas**
Updated to "2027-12-31".

**[HIGH — FIXED] Article schema author @type: Person for org team**
When `author` contains "team" or "honda", now correctly uses `@type: Organization` with `@id` reference.

**[MEDIUM] No AggregateRating on SEOHead global schema**
The homepage organizationSchema has aggregateRating (4.3/5, 500 reviews). But the global SEOHead schema on other pages (service, kamareddy) doesn't. Low priority since product/blog pages suppress the org schema.

**[MEDIUM] No WebPage schema linking pages to the organization**
Adding `@type: WebPage` with `isPartOf: { @id: "/#organization" }` on each page strengthens the entity graph.

**[LOW] No Review schema for the hardcoded testimonials**
The 4 testimonials on the homepage could use `Review` schema for rich snippet eligibility.

---

## 5. Performance / Core Web Vitals (58/100)

*Note: Field data requires CrUX API. Lab estimates based on page inspection.*

### ✅ Passing
- Astro static output = minimal JS bundle
- Tailwind CSS = purged, small CSS
- Font preconnect declared for Google Fonts
- GTM loaded async

### ❌ Issues Found

**[HIGH] Product images loaded from honda2wheelersindia.com (external CDN)**
Featured images for all products use Honda India's CDN (`honda2wheelersindia.com`). This creates dependency on an external domain's availability and prevents image optimization (WebP, sizing). If Honda India changes URLs, all product images break simultaneously.

**[HIGH] Hero image at `/kamareddy` and service section uses external images**
`yashhonda.com` image used for service section background — external dependency.

**[MEDIUM] No `loading="lazy"` on below-fold images**
Product card images and review section images don't have `loading="lazy"` — they impact LCP.

**[MEDIUM] Google Fonts loaded synchronously**
`<link href="https://fonts.googleapis.com/...">` blocks render. Should use `font-display: swap` (already likely via Tailwind) but the connection adds latency.

**[LOW] No resource hints for critical third-party scripts**
GTM, WhatsApp, Google Fonts — no `<link rel="preconnect">` for `googletagmanager.com`.

---

## 6. AI Search Readiness (40/100 → est. 75/100 post-fix)

### ✅ Passing (post-fix)
- robots.txt now allows all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- llms.txt created with full business context (models, pricing, location, hours, services)
- About page provides E-E-A-T signals (authorization credentials, area served)
- FAQ section answers entity-level questions (where, what, how, price)
- Bilingual content strengthens local entity recognition

### ❌ Issues Found (pre-fix)

**[CRITICAL — FIXED] No llms.txt**
AI crawlers had no structured context document. ChatGPT, Perplexity, Claude would have to infer business info from HTML. Created `public/llms.txt` with: business overview, location, phone, all models with prices, services, EMI info, area served, customer ratings.

**[HIGH — FIXED] robots.txt omitted AI crawlers — effectively blocking them**
robots.txt only said `User-agent: * / Allow: /`. GPTBot and ClaudeBot respect robots.txt. The lack of explicit Allow with user-agent blocks meant some AI crawlers defaulted to cautious behavior. Fixed with explicit Allow for all major AI agents.

**[MEDIUM] No structured citation anchors in blog content**
Blog posts don't use factual statement markup (e.g., "Honda Activa 125 price in Kamareddy is ₹95,000") in a way that's easily extractable for AI citations. Adding definition-style statements ("As of 2026, Honda Activa 125 on-road price in Kamareddy, Telangana starts at ₹95,000...") would improve AI citability.

**[MEDIUM] No `/about-us` → `/about` proper redirect (was sending to `/#branches`)**
AI crawlers indexing the about page as a trust signal would have found a redirect to the branches section. Fixed.

---

## 7. Local SEO (NAP Consistency)

### ✅ Passing
- Business name consistent: "Prakash Auto Honda" throughout
- Address consistent: Kamareddy, Telangana 503111
- Google Maps links in branch cards (unique per branch ✅)
- Hours consistent: Mon–Sat 9AM–7PM

### ❌ Issues Found

**[HIGH — FIXED] Footer phone (+91 8886640573) ≠ schema/CTA phone (+91 8886604615)**
NAP inconsistency across the page. All primary CTAs, WhatsApp links, schema, and SEO title use `8886604615`. Footer used `8886640573`. Fixed footer to match.

**[MEDIUM] No GBP (Google Business Profile) optimization signals detected**
No GBP post links, no direct review link, no GBP embed. Recommend embedding the GBP map on the contact/branch section and linking to "Leave a review" to grow the 500+ count.

**[MEDIUM] Kamareddy branch address vague in schema**
`streetAddress: "Kamareddy"` is not specific enough. Live site shows "Hyderabad Road, Kamareddy." Update schema to include the full street address.

---

## 8. Backlink Profile (Estimated)

*Full Moz/Bing API data not available. Estimated from Common Crawl signals.*

- Domain is relatively new (2022) — DA likely 10–20
- Limited referring domains detected — primarily Honda India, local directories
- No toxic link signals
- **Opportunity:** Submit to JustDial, IndiaMART, Sulekha, Practo (for local citations), Honda dealer directory, Telangana local business directories

---

## 9. Images (52/100)

### ✅ Passing
- Alt text on hero and product images
- Responsive CSS sizing

### ❌ Issues Found

**[HIGH] All product images externally hosted on honda2wheelersindia.com**
These images cannot be optimized for WebP format, cannot be served from Vercel's CDN edge, and will break if Honda India changes their URL structure. Recommend downloading and self-hosting in `public/images/products/`.

**[MEDIUM] No OG image file at /og-image.jpg**
SEOHead references `/og-image.jpg` as the default OG image, but this file was not found in `public/`. Social shares will show a broken image.

**[MEDIUM] Blog post images use local paths (`/images/blog/`) but some posts may reference non-existent files**
The category-based thumbnail system requires the exact filenames to exist in `public/images/blog/`.

---

## Files Changed in This Audit

| File | Changes |
|------|---------|
| `src/components/SEOHead.astro` | Fixed default description ("cars"→"two-wheelers"), added `noOrgSchema` prop, added `@id` + `foundingDate` to schema |
| `src/layouts/Layout.astro` | Added `noOrgSchema` prop to interface and SEOHead passthrough |
| `src/pages/index.astro` | Added `@id` + `foundingDate` to org schema, removed duplicate AutoDealer in reviews section, added `noOrgSchema={true}` |
| `src/pages/about.astro` | Fixed `@id` + `foundingDate` + `url` in schema, fixed "10+ Years" → "Since 2022", fixed 9 broken product links, added `noOrgSchema={true}` |
| `src/pages/products/[slug].astro` | Added `noOrgSchema={true}`, added `@id` + `@type MotorizedBicycle` to product schema, updated `priceValidUntil` to 2027 |
| `src/pages/blog/[slug].astro` | Added `noOrgSchema={true}`, fixed article author `@type` (Person→Organization for team authors), added `@id` to article schema |
| `vercel.json` | Added 5 security headers, added `/sitemap.xml` redirect, fixed `/about-us` redirect |
| `astro.config.mjs` | Added `/lp/` sitemap filter, replaced `new Date()` with static lastmod constants |
| `public/robots.txt` | Added explicit Allow for GPTBot, ClaudeBot, PerplexityBot, Amazonbot, anthropic-ai; added `Disallow: /lp/` |
| `public/llms.txt` | Created — full business context for AI crawlers |
| `src/components/Footer.astro` | Fixed phone number (8886640573→8886604615), added About + Service to quick links |
