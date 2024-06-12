'use client'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from './lang/common.en'
import commonFr from './lang/common.fr'
import commonZh from './lang/common.zh'
import appEn from './lang/app.en'
import appFr from './lang/app.fr'
import appZh from './lang/app.zh'
import toolsEn from './lang/tools.en'
import toolsFr from './lang/tools.fr'
import toolsZh from './lang/tools.zh'
import type { Locale } from '.'

const resources = {
  'fr': {
    translation: {
      common: commonFr,
      app: appFr,
      // tools
      tools: toolsFr,
    },
  },
  'en': {
    translation: {
      common: commonEn,
      app: appEn,
      // tools
      tools: toolsEn,
    },
  },
  'zh-Hans': {
    translation: {
      common: commonZh,
      app: appZh,
      // tools
      tools: toolsZh,
    },
  },
}

i18n.use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    // debug: true,
    resources,
  })

export const changeLanguage = (lan: Locale) => {
  i18n.changeLanguage(lan)
}
export default i18n
