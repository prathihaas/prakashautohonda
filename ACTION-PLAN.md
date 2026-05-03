# SEO Action Plan — Prakash Auto Honda
**Generated:** 2026-05-03  
**Status:** Critical + High issues FIXED in this commit. Medium/Low remain.

---

## ✅ FIXED — Critical Issues

| # | Issue | File Fixed |
|---|-------|-----------|
| C1 | Default meta description said "Honda cars" (wrong business type) | `SEOHead.astro` |
| C2 | Duplicate AutoDealer schema on homepage (SEOHead + index.astro) | `index.astro` + `Layout.astro` |
| C3 | AutoDealer schema on product/blog pages causing schema noise | `products/[slug].astro`, `blog/[slug].astro` |
| C4 | All AutoDealer schemas missing `@id` — broken entity graph | `SEOHead.astro`, `index.astro`, `about.astro` |
| C5 | "10+ Years" about page vs "since 2022" footer — E-E-A-T credibility gap | `about.astro` |
| C6 | 9 broken product links (404s) on about page | `about.astro` |

## ✅ FIXED — High Issues

| # | Issue | File Fixed |
|---|-------|-----------|
| H1 | Missing security headers (HSTS, X-Frame-Options, etc.) | `vercel.json` |
| H2 | /sitemap.xml had no redirect to /sitemap-index.xml | `vercel.json` |
| H3 | Sitemap lastmod = `new Date()` on every build | `astro.config.mjs` |
| H4 | /lp/honda-kamareddy/ leaking into sitemap | `astro.config.mjs` |
| H5 | robots.txt not explicitly allowing AI crawlers | `public/robots.txt` |
| H6 | No llms.txt for AI crawler context | `public/llms.txt` (created) |
| H7 | Article schema @type: Person for organizational author | `blog/[slug].astro` |
| H8 | Product schema missing @id and @type MotorizedBicycle | `products/[slug].astro` |
| H9 | Product schema priceValidUntil hardcoded "2026-12-31" | `products/[slug].astro` |
| H10 | foundingDate missing from AutoDealer schemas | `SEOHead.astro`, `index.astro`, `about.astro` |
| H11 | Footer phone (8886640573) ≠ schema/CTA phone (8886604615) | `Footer.astro` |
| H12 | /about-us redirect was sending to /#branches, not /about | `vercel.json` |

---

## 🟡 MEDIUM — Fix Within 2 Weeks

### M1: Create a dedicated /lingampet/ page
**Why:** Lingampet is mentioned as a branch but has no standalone SEO page. "Honda showroom Lingampet" has local search volume.
**How:** Create `src/pages/lingampet.astro` mirroring the pattern of `/kamareddy/`. Include LocalBusiness schema, branch-specific phone (+91 9985033315), Google Maps embed, and link to Lingampet blog posts.

### M2: Fix product images — move from honda2wheelersindia.com to self-hosted
**Why:** External images can't be optimized (WebP/AVIF), served from Vercel edge, or controlled. One URL change from Honda India breaks all product images.
**How:** Download images → place in `public/images/products/` → update frontmatter in all 14 product `.md` files.

### M3: Create /og-image.jpg
**Why:** Default OG image (`/og-image.jpg`) referenced in SEOHead doesn't exist in `public/`. Social shares for pages without featured images show broken previews.
**How:** Create a 1200×630 branded image with "Prakash Auto Honda — Honda Showroom Kamareddy" and the Honda logo. Save to `public/og-image.jpg`.

### M4: Add breadcrumb schema to Homepage, About, Service, Kamareddy pages
**Why:** Breadcrumb rich snippets improve CTR in SERP. Currently only product + blog pages have them.
**How:** Add BreadcrumbList JSON-LD to `about.astro`, `service.astro`, `kamareddy.astro`.

### M5: Add Blog → Branch internal links
**Why:** Blog posts end with a WhatsApp/Call CTA but don't link to `/kamareddy/` or `/#branches`. This weakens crawl depth and topical authority for local pages.
**How:** In `blog/[slug].astro`, add a "Visit our Kamareddy showroom →" link above the existing CTA section.

### M6: Update Kamareddy branch streetAddress in all schemas
**Why:** `streetAddress: "Kamareddy"` is vague. Live site and GBP show "Hyderabad Road, Kamareddy."
**How:** Update `streetAddress` to `"Hyderabad Road"` in SEOHead.astro and index.astro organization schemas.

### M7: Add `loading="lazy"` to below-fold images
**Why:** Product card grid and review section images load eagerly, impacting LCP.
**How:** Add `loading="lazy"` to `ProductCard.astro` images and review section images in `index.astro`.

### M8: Add Header navigation links for About and Service
**Why:** About and Service are important E-E-A-T pages not accessible from the main nav. Users discovering the site via product pages have no easy path to trust signals.
**How:** Add `/about` and `/service` links to `Header.astro` desktop nav.

### M9: Add noOrgSchema to Service and Kamareddy pages
**Why:** `service.astro` and `kamareddy.astro` may define their own LocalBusiness/AutoDealer schemas. Check for duplicates and add `noOrgSchema={true}` if needed.

---

## 🔵 LOW — Backlog (Fix When Time Permits)

### L1: Content Security Policy (CSP) header
Add a carefully crafted CSP to vercel.json allowing GTM, Google Fonts, WhatsApp CDN. Test thoroughly before deploying.

### L2: og:locale:alternate for Telugu
Add `<meta property="og:locale:alternate" content="te_IN" />` to SEOHead.astro for bilingual signal to social platforms.

### L3: Review schema for homepage testimonials
The 4 customer testimonials on the homepage could use `@type: Review` within the AutoDealer schema for rich snippet eligibility.

### L4: WebPage schema on all pages
Add `@type: WebPage` with `isPartOf: { "@id": "https://www.prakashautohonda.com/#organization" }` to connect all pages to the entity graph.

### L5: Submit to local citation directories
Submit NAP to: JustDial, IndiaMART, Sulekha, Honda dealer locator, Telangana local business directories, Justdial Kamareddy. Consistent NAP = stronger local pack eligibility.

### L6: GBP optimization
- Add GBP "Leave a review" link to homepage
- Embed Google Maps on the branch section
- Post monthly GBP updates (offers, new models, events)

### L7: Add `preconnect` for GTM
Add `<link rel="preconnect" href="https://www.googletagmanager.com">` in Layout.astro head to reduce GTM load latency.

### L8: Create /sitemap-index.xml check page
Verify the Astro sitemap integration correctly generates `/sitemap-index.xml` (not just `/sitemap-0.xml`) — this was referenced in SEOHead but needs live validation.

### L9: Investigate AggregateRating source
The 4.3/5 with 500 reviews is displayed on the homepage but sourced from hardcoded data. If the real GBP rating is higher or lower, this needs updating. Connect to real GBP data or update quarterly.

### L10: Add Telugu hreflang properly
Currently `hreflang="en"` covers the entire site. If Telugu content is significant (50%+ of blog posts have `title_te`), consider implementing proper `hreflang="te"` alternate URLs or a subdirectory `/te/`.

---

## Ongoing Monitoring

| Task | Frequency | Tool |
|------|-----------|------|
| Check GSC for crawl errors | Weekly | Google Search Console |
| Monitor Core Web Vitals | Monthly | CrUX / PageSpeed Insights |
| Update sitemap lastmod constants | Per content batch | `astro.config.mjs` |
| Rotate `priceValidUntil` in product schema | Annually | `products/[slug].astro` |
| Update llms.txt with new model prices | Quarterly | `public/llms.txt` |
| Check for broken product image links | Monthly | Vercel logs |
