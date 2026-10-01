import { homeTranslations } from '../features/home/home.i18n';
import { contactTranslations } from '../features/contact/contact.i18n';
import { Locale } from './Locale';

const en = {
  contact: contactTranslations.en,
  home: homeTranslations.en,
};

export type Translations = typeof en;

export const translations: Record<Locale, Translations> = {
  en,
  fr: {
    contact: contactTranslations.fr,
    home: homeTranslations.fr,
  },
};
