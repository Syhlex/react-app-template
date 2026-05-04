import { createContext } from 'react';
import { translations } from './translations';

export enum Locale {
  EN = 'en',
  FR = 'fr',
}

export interface I18nContextValues {
  locale: Locale;
  i18n: (typeof translations)[Locale.EN];
  changeLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValues>({
  locale: Locale.EN,
  i18n: translations[Locale.EN],
  changeLocale: () => {},
});
