// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emmanuelakitikpa.github.io',
  base: '/neuralscope',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: true },
  },
});