// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],

	googleFonts: {
		families: {
			Inter: [100, 300, 400, 700, 900]
		}
	},

	app: {
		head: {
			title: `Let's Cook!`,
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico?v=2' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons+Round'
				}
			],

			script: [
				{
					src: 'https://cdn.checkout.com/js/framesv2.min.js'
				},
				{
					src: 'https://accounts.google.com/gsi/client'
				}
			],

			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },

				{ property: 'og:type', content: 'website' },
				{ name: 'theme-color', content: '#facc15' },

				{ property: 'title', content: `Let's Cook! - Your Go-To Destination for Delicious Recipes` },
				{ property: 'og:title', content: `Let's Cook! - Your Go-To Destination for Delicious Recipes` },
				{ property: 'twitter:title', content: `Let's Cook! - Your Go-To Destination for Delicious Recipes` },

				// description
				{
					property: 'description',
					content: `Dive into a world of flavors with Let's Cook! Discover a diverse array of mouth-watering recipes. and find inspiration for your next kitchen adventure. Join us and elevate your cooking experience!`
				},
				{
					property: 'og:description',
					content: `Dive into a world of flavors with Let's Cook! Discover a diverse array of mouth-watering recipes. and find inspiration for your next kitchen adventure. Join us and elevate your cooking experience!`
				},
				{
					property: 'twitter:description',
					content: `Dive into a world of flavors with Let's Cook! Discover a diverse array of mouth-watering recipes. and find inspiration for your next kitchen adventure. Join us and elevate your cooking experience!`
				},
				{ property: 'og:image', content: 'header.png' },
				{ property: 'twitter:image', content: 'header.png' }
			]
		}
	}
})
