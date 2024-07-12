import type { LocalePrefix, Pathnames } from 'next-intl/routing';

import { LocaleCodes } from './constants/localization';

export const defaultLocale = LocaleCodes.EN;
export const locales = Object.values(LocaleCodes);

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/game/[gameId]': {
    [LocaleCodes.EN]: '/game/[gameId]',
    [LocaleCodes.UK]: '/game/[gameId]',
  },
  '/articles': {
    [LocaleCodes.EN]: '/articles',
    [LocaleCodes.UK]: '/articles',
  },
  '/articles/[articleId]': {
    [LocaleCodes.EN]: '/articles/[articleId]',
    [LocaleCodes.UK]: '/articles/[articleId]',
  },
  '/contacts': {
    [LocaleCodes.EN]: '/contacts',
    [LocaleCodes.UK]: '/contacts'
  },
  '/dashboard': {
    [LocaleCodes.EN]: '/dashboard',
    [LocaleCodes.UK]: '/dashboard'
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;

export const appName = 'Cyberantis';

export const host = `https://localhost:${port}`;
