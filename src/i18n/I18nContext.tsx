import { createContext } from 'react';
import { Locale } from './i18nService';

export interface I18nContextValues {
  locale: Locale;
  get: (key: string) => string;
  changeLocale: (locale: Locale) => void;
}

export const I18nContext = createContext<I18nContextValues>({
  locale: Locale.EN,
  get: () => '',
  changeLocale: () => {},
});
