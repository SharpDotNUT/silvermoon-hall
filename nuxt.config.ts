import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  ssr: false,
  modules: ['@primevue/nuxt-module'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
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
