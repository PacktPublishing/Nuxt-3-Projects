import { computed, useCookie, useRuntimeConfig } from '#imports'
import type { LocaleOption } from '~/src/types'

export default () => {
  const config = useRuntimeConfig()
  const translation = config.public.translation
  const locale = useCookie<string>('defaultLocale')
  const locales: LocaleOption[] = translation.locales ?? []

  if (!locale.value) locale.value = translation.defaultLocale

  const messages = computed(() => {
    const key = locale.value || translation.defaultLocale

    return translation.messages[key]
  })

  return { locale, locales, messages }
}
