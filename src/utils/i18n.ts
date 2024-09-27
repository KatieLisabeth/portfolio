import { createI18n } from 'vue-i18n'
import en from './../../locales/en.json'
import nl from './../../locales/nl.json'

const messages = {
  'en-US': en,
  'nl-NL': nl
}

export const i18n = createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages,
  missing: (locale, key) => {
    console.log(`Missing translation for ${key} in ${locale}`)
  },
  escapeParameterHtml: true
})
