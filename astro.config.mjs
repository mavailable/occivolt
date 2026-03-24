import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://occivolt.pages.dev',
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/aide') && !page.includes('/merci'),
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-FR' } },
    }),
    react(),
    keystatic(),
  ],
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: { cssMinify: true },
  },
});
