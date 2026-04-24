// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), sitemap()],
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
        emitTsDeclarations: true,
      }),
    ],
  },
  image: {
    domains: ["events.canonical.com", "www.debian.org"],
    remotePatterns: [{ protocol: "https" }]
  },
  site: "https://2026.ubuntu-kr.org",
});