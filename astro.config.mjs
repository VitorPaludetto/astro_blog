import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://vitor-paludetto-astro-blog.netlify.app/',
  integrations: [preact()]
});