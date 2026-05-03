import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// Static lastmod dates — update when content actually changes, not on every build
const HOMEPAGE_LASTMOD   = '2026-05-03T00:00:00.000Z';
const BLOG_LASTMOD       = '2026-05-03T00:00:00.000Z';
const PRODUCT_LASTMOD    = '2026-05-01T00:00:00.000Z';
const LOCATION_LASTMOD   = '2026-05-01T00:00:00.000Z';
const STATIC_PAGE_LASTMOD = '2026-04-15T00:00:00.000Z';

export default defineConfig({
  site: "https://www.prakashautohonda.com",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/404') &&
        !page.includes('/lp/'),
      serialize: (item) => {
        const url = item.url;

        if (url === 'https://www.prakashautohonda.com/' || url === 'https://www.prakashautohonda.com') {
          return { ...item, priority: 1.0, changefreq: 'daily', lastmod: HOMEPAGE_LASTMOD };
        }
        if (url.endsWith('/blog') || url.endsWith('/blog/')) {
          return { ...item, priority: 0.9, changefreq: 'weekly', lastmod: BLOG_LASTMOD };
        }
        if (url.includes('/blog/')) {
          return { ...item, priority: 0.8, changefreq: 'weekly', lastmod: BLOG_LASTMOD };
        }
        if (url.includes('/products/') || url.includes('/cars/') || url.includes('/services/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly', lastmod: PRODUCT_LASTMOD };
        }
        if (url.includes('/locations') || url.includes('/branches') || url.includes('/kamareddy')) {
          return { ...item, priority: 0.7, changefreq: 'monthly', lastmod: LOCATION_LASTMOD };
        }
        if (url.includes('/contact')) {
          return { ...item, priority: 0.6, changefreq: 'yearly', lastmod: STATIC_PAGE_LASTMOD };
        }
        return { ...item, priority: 0.6, changefreq: 'monthly', lastmod: STATIC_PAGE_LASTMOD };
      },
    }),
    react(),
  ],
});
