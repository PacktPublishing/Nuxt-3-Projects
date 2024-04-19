import { defineNuxtPlugin } from '#imports'
import useTranslation from '../composables/useTranslation'

export default defineNuxtPlugin(async () => {
  const { messages } = useTranslation()

  // translator
  const t = (key: string) => {
    return messages.value[key] || key
  }

  return {
    provide: { t }
  }
})
