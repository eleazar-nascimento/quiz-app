import { TRANSLATIONS } from "../constants/translations";

export const useLocalization = () => {
  const DEFAULT_LOCALE = 'pt-BR'; 
  const browserLocale = navigator.languages?.[0] || navigator.language || DEFAULT_LOCALE;
  
  const findMatchingLocale = (locale: any) => {
    if (TRANSLATIONS[locale]) return locale;
    const lang = locale.split('-')[0];
    const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
    return match || DEFAULT_LOCALE;  
  };
  
  const currentLocale = findMatchingLocale(browserLocale);
  
  const translate = (key: any) => TRANSLATIONS[currentLocale]?.[key] || TRANSLATIONS[DEFAULT_LOCALE][key] || key;
  
  return { translate, currentLocale };
};