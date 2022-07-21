import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TRANSLATIONS_HR from './translations/hr/translation.json';
import TRANSLATIONS_IT from './translations/it/translation.json';
import TRANSLATIONS_FR from './translations/fr/translation.json';
import TRANSLATIONS_EN from './translations/en/translation.json';
import TRANSLATIONS_ES from './translations/es/translation.json';
import TRANSLATIONS_DE from './translations/de/translation.json';

i18n.use(initReactI18next).init({
  returnEmptyString: false,
  resources: {
    hr: {
      translation: TRANSLATIONS_HR,
    },
    it: {
      translation: TRANSLATIONS_IT,
    },
    en: {
      translation: TRANSLATIONS_EN,
    },
    es: {
      translation: TRANSLATIONS_ES,
    },
    fr: {
      translation: TRANSLATIONS_FR,
    },
    de: {
      translation: TRANSLATIONS_DE,
    },
  },
});

i18n.init({
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
