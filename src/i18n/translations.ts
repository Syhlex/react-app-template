import { Translations } from './i18nService';
import { homeTranslations } from '../features/home/home.i18n';
import { contactTranslations } from '../features/contact/contact.i18n';

export const translations: Translations = {
  en: {
    contact: contactTranslations.en,
    home: homeTranslations.en,
  },
  fr: {
    contact: contactTranslations.fr,
    home: homeTranslations.fr,
  },
};
