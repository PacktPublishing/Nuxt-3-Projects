import { computed, useCookie, useRuntimeConfig } from '#imports'

export default () => {
  const config = useRuntimeConfig()
  const translation = config.public.translation
  const locale = useCookie('defaultLocale')
  const locales = translation.locales

  if (!locale.value) locale.value = translation.defaultLocale

  const messages = computed(() => {
    const key = locale.value || translation.defaultLocale

    return translation.messages[key]
  })

  return { locale, locales, messages }
}
