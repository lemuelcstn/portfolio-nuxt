import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      siteUrl: 'https://lemuel-custan-portfolio.onrender.com',
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})