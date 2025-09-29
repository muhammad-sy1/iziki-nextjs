// lib/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/app/locales/en.json";
import ar from "@/app/locales/ar.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: "en", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
