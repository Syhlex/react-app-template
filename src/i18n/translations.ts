import { homeTranslations } from '../features/home/home.i18n';
import { contactTranslations } from '../features/contact/contact.i18n';
import { errorsTranslations } from '../features/errors/errors.i18n';
import { layoutTranslations } from '../features/layout/layout.i18n';
import { Locale } from './Locale';

const en = {
  contact: contactTranslations.en,
  errors: errorsTranslations.en,
  home: homeTranslations.en,
  layout: layoutTranslations.en,
};

export type Translations = typeof en;

export const translations: Record<Locale, Translations> = {
  en,
  fr: {
    contact: contactTranslations.fr,
    errors: errorsTranslations.fr,
    home: homeTranslations.fr,
    layout: layoutTranslations.fr,
  },
};
