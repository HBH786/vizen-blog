import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://your-domain.com',
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  }
});