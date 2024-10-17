import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind"
import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), pagefind(), sitemap()],

  output: "hybrid",
  site: 'https://your-domain.com',

  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },

  adapter: node({
    mode: 'standalone'
  })
});