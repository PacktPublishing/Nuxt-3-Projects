// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/google-fonts', '@pinia/nuxt'],

  css: ['~/assets/main.scss'],

  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 700, 900]
    }
  },

  runtimeConfig: {
    public: {
      weatherApiKey: '1f6ec271f3da959c1db1575514f66264'
    }
  },

  app: {
    head: {
      title: 'Clear Sky'
    }
  }
})
