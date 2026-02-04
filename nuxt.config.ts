import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: true,
  modules: ['@primevue/nuxt-module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  features: {
    inlineStyles: false
  },
  nitro: {
    static: true,
    prerender: {
      crawlLinks: true
    }
  },
  routeRules: {
    '/': {
      prerender: true
    },
    '/home': {
      prerender: true
    },
    '/**': { ssr: false }
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark'
        }
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
