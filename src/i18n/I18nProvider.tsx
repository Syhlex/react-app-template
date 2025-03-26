import { ReactNode, useState } from 'react';
import { I18nContext } from './I18nContext';
import { Locale, i18nService } from './i18nService';

export interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);

  const get = (path: string) => {
    return i18nService.get(locale, path);
  };

  const changeLocale = (locale: Locale) => {
    setLocale(locale);
  };

  return (
    <I18nContext
      value={{
        locale,
        get,
        changeLocale,
      }}
    >
      {children}
    </I18nContext>
  );
};
