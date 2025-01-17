import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
// FIXME: background-color in .button in PricingTable.css is not dark in dark mode
// import critters from "astro-critters";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // Building a static site to be deploy to any static host.
  output: "static",
  site: "https://escuela.dev/",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          en: "en-GB",
          es: "es-ES",
        },
      },
    }),
    mdx(),
    // critters(),
    robotsTxt({
      sitemap: false,
    }),
    icon(),
    compressor(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  prefetch: true,
});
