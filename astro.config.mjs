// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://diogo23-dev.github.io/porfolio/',
  base: '/porfolio',
  integrations: [sitemap()],
});
