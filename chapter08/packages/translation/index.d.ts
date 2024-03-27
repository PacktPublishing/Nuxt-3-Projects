import type { Messages, ModuleOptions } from './src/types'

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    translation: ModuleOptions & { messages: Messages }
  }
}

export {}
