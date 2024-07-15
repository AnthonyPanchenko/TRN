import type { MetadataRoute } from 'next';

/*
import { MetadataRoute } from 'next'

import { type MetadataRoute } from 'next';

const now = new Date().toISOString();

export default function sitemap(): MetadataRoute.Sitemap {
  const url = process.env.URL ?? 'http://localhost:3000';

  return [
    {
      url: `${url}`,
      lastModified: now,
    },
    {
      url: `${url}/sections`,
      lastModified: now,
    },
    {
      url: `${url}/posts`,
      lastModified: now,
    },
    {
      url: `${url}/posts/new`,
      lastModified: now,
    },
    {
      url: `${url}/users`,
      lastModified: now,
    },
    {
      url: `${url}/login`,
      lastModified: now,
    },
    {
      url: `${url}/register`,
      lastModified: now,
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}
*/

import { locales, pathnames, defaultLocale, host } from '../config';
import { getPathname } from '../navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames);

  function getUrl(key: keyof typeof pathnames, locale: (typeof locales)[number]) {
    const pathname = getPathname({ locale, href: key });
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(locales.map((locale) => [locale, getUrl(key, locale)])),
    },
  }));
}
