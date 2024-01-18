import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import vue from "@astrojs/vue";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [vue({
    appEntrypoint: '/src/pages/_vue'
  }), react({
    include: ['**/react/*'],
    experimentalReactChildren: true,
  })]
});