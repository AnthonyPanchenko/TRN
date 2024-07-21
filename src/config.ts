import type { LocalePrefix, Pathnames } from 'next-intl/routing';

import { LocaleCodes } from './constants/localization';

export const defaultLocale = LocaleCodes.EN;
export const locales = Object.values(LocaleCodes);

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/game/[gameId]': {
    [LocaleCodes.EN]: '/game/[gameId]',
    [LocaleCodes.UA]: '/game/[gameId]',
  },
  '/articles': {
    [LocaleCodes.EN]: '/articles',
    [LocaleCodes.UA]: '/articles',
  },
  '/articles/[articleId]': {
    [LocaleCodes.EN]: '/articles/[articleId]',
    [LocaleCodes.UA]: '/articles/[articleId]',
  },
  '/contacts': {
    [LocaleCodes.EN]: '/contacts',
    [LocaleCodes.UA]: '/contacts',
  },
  '/signin': {
    [LocaleCodes.EN]: '/signin',
    [LocaleCodes.UA]: '/signin',
  },
  '/signup': {
    [LocaleCodes.EN]: '/signup',
    [LocaleCodes.UA]: '/signup',
  },
  '/dashboard': {
    [LocaleCodes.EN]: '/dashboard',
    [LocaleCodes.UA]: '/dashboard',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';

export const port = process.env.PORT || 3000;

export const appName = 'TRN';

export const host = `https://localhost:${port}`;
