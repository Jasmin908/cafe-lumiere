import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  server: { port: 4321 },
  devToolbar: { enabled: false },
});
