import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages, IntlConfig } from 'next-intl';

import { locales } from './config';
import type { LocaleCodes } from './constants/localization';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as LocaleCodes)) notFound();

  const translations = (await import(`../locales/${locale}.json`)) as { default: AbstractIntlMessages };

  const data: Omit<IntlConfig, 'locale'> = {
    messages: translations.default,
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        },
      },
      number: {
        precise: {
          maximumFractionDigits: 2,
        },
      },
      list: {
        enumeration: {
          style: 'long',
          type: 'conjunction',
        },
      },
    },
  };

  return data;
});
