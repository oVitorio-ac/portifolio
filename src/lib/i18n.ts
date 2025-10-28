import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const routing = {
  locales: ['en', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'never'
};

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !routing.locales.includes(locale)) notFound();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});