// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    mdx(),
  ],
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
      }),
    ],
  },
  image: {
    domains: ["events.canonical.com"],
    remotePatterns: [{ protocol: "https" }]
  },
});