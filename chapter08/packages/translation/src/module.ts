import { readFileSync } from 'node:fs'
import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  installModule,
  hasNuxtModule,
  addComponentsDir
} from '@nuxt/kit'
import type { Messages, ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'translation',
    configKey: 'translation'
  },

  // Default configuration options of the Nuxt module
  defaults: {
    defaultLocale: 'en',
    locales: []
  },

  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const localesResolver = createResolver(nuxt.options.srcDir)

    const messages: Messages = {}

    for (const locale of options.locales ?? []) {
      const filePath = localesResolver.resolve(locale.file)

      const fileContents = await readFileSync(filePath, 'utf-8') // Use the asynchronous readFile

      const _messages = JSON.parse(fileContents)

      messages[locale.name] = _messages
    }

    nuxt.options.runtimeConfig.public.translation = {
      ...options,
      messages
    }

    if (!hasNuxtModule('@nuxt/ui')) await installModule('@nuxt/ui')

    addPlugin(resolver.resolve('./runtime/plugins/translate'))
    addImportsDir(resolver.resolve('runtime/composables'))

    addComponentsDir({
      path: resolver.resolve('runtime/components')
    })
  }
})
