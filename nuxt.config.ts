import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    baseURL: '/metal-gena/',
    buildAssetsDir: '/assets/',
    head: {
      link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    },
  },
  modules: ['nuxt-swiper', 'nuxt-lucide-icons', '@nuxtjs/sitemap'],
  site: {
    url: 'https://металлообработка76.рф',
    name: 'Металлообработка | Ярослвль',
  },
})
