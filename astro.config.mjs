// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL to the live origin before a production build, for example
// SITE_URL=https://example.com npm run build
// That makes canonical URLs, Open Graph links, and the sitemap absolute.
const site = process.env.SITE_URL;

// https://astro.build/config
export default defineConfig({
  ...(site ? { site } : {}),
  vite: {
    plugins: [tailwindcss()]
  }
});