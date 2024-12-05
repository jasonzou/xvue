import type { App } from 'vue'
import { useAppConfigStore } from '@/stores/app'
import { createI18n } from 'vue-i18n'
import EnLocale from './lang/en'

const messages = {
  en: {
    ...EnLocale,
  },
}

// eslint-disable-next-line import/no-mutable-exports
export let i18n: any

export default function setupI18n(app: App) {
  const useAppConfig = useAppConfigStore()
  i18n = createI18n({
    legacy: false,
    locale: useAppConfig.getLanguage,
    messages,
  })
  app.use(i18n)
}
