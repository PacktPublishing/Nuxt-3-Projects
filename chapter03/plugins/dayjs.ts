import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export default defineNuxtPlugin(nuxtApp => {
  dayjs.extend(relativeTime)

  const fromNow = (date: string) => {
    return dayjs(date).fromNow()
  }

  return {
    provide: { fromNow }
  }
})
