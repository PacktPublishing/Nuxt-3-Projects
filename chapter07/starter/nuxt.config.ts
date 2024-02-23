// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],

  googleFonts: {
    families: {
      Montserrat: [300, 400, 700, 900]
    }
  }
})
