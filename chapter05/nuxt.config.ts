// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/supabase', '@nuxtjs/google-fonts', '@nuxt/ui'],

  googleFonts: {
    families: {
      Poppins: [400, 500, 700]
    }
  },

  app: {
    head: {
      title: 'My Space'
    }
  },

  supabase: {
    redirectOptions: {
      login: 'auth/login',
      callback: '',
      exclude: ['/auth/*']
    }
  }
})
