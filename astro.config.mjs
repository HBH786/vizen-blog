import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [tailwind(), pagefind(), react()],
  output: "static",
  site: 'https://vizen.co.uk', // Replace with your actual domain
});