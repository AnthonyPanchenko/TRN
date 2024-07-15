import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Nunito } from 'next/font/google';
import './globals.css';
import './styles.scss';

import BaseAppTemplate from '../../components/BaseAppTemplate';
import type { AppLayoutProps } from '../../types/common';
import { cn } from '../../utils/cn';
import ClientProviders from '../ClientProviders';

const nunito = Nunito({ subsets: ['cyrillic'] });

export default async function RootLayout({ children, auth, params }: AppLayoutProps) {
  const messages = await getMessages();

  return (
    <html
      suppressHydrationWarning
      className="h-full"
      lang={params.locale as string}
    >
      <head>
        <link
          href="/assets/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/assets/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/assets/favicon-194x194.png"
          rel="icon"
          sizes="194x194"
          type="image/png"
        />
        <link
          href="/assets/android-chrome-192x192.png"
          rel="icon"
          sizes="192x192"
          type="image/png"
        />
        <link
          href="/assets/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link
          href="/assets/site.webmanifest"
          rel="manifest"
        />
        <link
          color="#09090b"
          href="/assets/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link
          href="/assets/favicon.ico"
          rel="shortcut icon"
        />
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport"
        />
        <meta
          content="#09090b"
          name="msapplication-TileColor"
        />
        <meta
          content="/assets/mstile-144x144.png"
          name="msapplication-TileImage"
        />
        <meta
          content="/assets/browserconfig.xml"
          name="msapplication-config"
        />
        <meta
          content="#09090b"
          name="theme-color"
        />
      </head>
      <body className={cn('flex flex-col h-full justify-between', nunito.className)}>
        <NextIntlClientProvider messages={messages}>
          <ClientProviders>
            <BaseAppTemplate params={params}>
              {children}
              {auth}
            </BaseAppTemplate>
          </ClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
