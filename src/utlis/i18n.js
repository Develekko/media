import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLocale from './locales/en.json';
import arLocale from './locales/ar.json';
import deLocale from './locales/de.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: { translation: enLocale },
  ar: { translation: arLocale },
  de: { translation: deLocale }
};

const languageDetector = new LanguageDetector();
languageDetector.init({
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
});

i18n
.use(new LanguageDetector(null, { lookupLocalStorage: "language" }))
.use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n;