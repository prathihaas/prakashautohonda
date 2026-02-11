import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://prakashautohonda.com', // Replace with production URL
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
});
