import { ReactNode, useMemo, useState } from 'react';
import { I18nContext } from './I18nContext';
import { Locale } from './Locale';
import { translations } from './translations';

export interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [locale, setLocale] = useState<Locale>(Locale.EN);

  const value = useMemo(
    () => ({
      locale,
      i18n: translations[locale],
      changeLocale: setLocale,
    }),
    [locale],
  );

  return <I18nContext value={value}>{children}</I18nContext>;
};
