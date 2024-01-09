// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Lato: [100, 300, 400, 700, 900]
    }
  }
})
