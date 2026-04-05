// @ts-check
import { defineConfig } from 'astro/config';
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
  image: {
    domains: ["events.canonical.com"],
    remotePatterns: [{ protocol: "https" }]
  },
});