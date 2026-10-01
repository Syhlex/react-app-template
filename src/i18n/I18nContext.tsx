import { createContext } from 'react';
import { Locale } from './Locale';
import { Translations, translations } from './translations';

export interface I18nContextValues {
  locale: Locale;
  i18n: Translations;
  changeLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValues>({
  locale: Locale.EN,
  i18n: translations[Locale.EN],
  changeLocale: () => {},
});
