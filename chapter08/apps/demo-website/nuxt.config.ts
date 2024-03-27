// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['translation', '@nuxt/ui'],

	translation: {
		defaultLocale: 'en',
		locales: [
			{ name: 'en', file: 'locales/en.json' },
			{ name: 'fr', file: 'locales/fr.json' }
		]
	}
})
