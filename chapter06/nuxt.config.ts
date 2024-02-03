// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/seo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  googleFonts: {
    families: {
      Inter: [100, 300, 400, 700, 900]
    }
  },

  site: {
    url: 'http://localhost:3000',
    name: `Let's Cook - Your Go-To Destination for Delicious Recipes`,
    description: `Dive into a world of flavors with Let's Cook! Discover a diverse array of mouth-watering recipes. and find inspiration for your next kitchen adventure. Join us and elevate your cooking experience!`,
    defaultLocale: 'en'
  },

  sitemap: {
    sources: ['http://localhost:3000/api/__sitemap__/urls']
  },

  image: {
    presets: {
      optimized: {
        modifiers: {
          format: 'webp',
          placeholder: true
        }
      }
    }
  }
})
