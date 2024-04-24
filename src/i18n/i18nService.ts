import { get as lodashGet } from 'lodash-es';
import { translations } from './translations';

export enum Locale {
  EN = 'en',
  FR = 'fr',
}

export type Translations = Record<Locale, Record<string, any>>;

const get = (locale: Locale, path: string) => {
  const text = lodashGet(translations[locale], path, '');
  if (typeof text !== 'string') {
    console.error(
      `Cannot find translation for path: ${path} in locale: ${locale}`,
    );
  }
  return text;
};

export const i18nService = {
  get,
};
