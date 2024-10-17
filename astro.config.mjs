import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind(), pagefind()],
  output: "static",
  site: 'https://your-domain.com', // Replace with your actual domain
});