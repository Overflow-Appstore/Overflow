import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/assets/lang/en.json';
import es from '@/assets/lang/es.json';
import fr from '@/assets/lang/fr.json';

void i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
