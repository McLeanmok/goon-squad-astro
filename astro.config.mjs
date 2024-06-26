import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://goon-squad-official.netlify.app/",
  integrations: [sitemap()]
});