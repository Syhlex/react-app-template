import { ReactNode, useState } from 'react';
import { I18nContext } from './I18nContext';
import { Locale } from './Locale';
import { translations } from './translations';

export interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);

  const changeLocale = (locale: Locale) => {
    setLocale(locale);
  };

  return (
    <I18nContext
      value={{
        locale,
        i18n: translations[locale],
        changeLocale,
      }}
    >
      {children}
    </I18nContext>
  );
};
