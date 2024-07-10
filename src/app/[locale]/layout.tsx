import "./globals.css";
import './styles.scss';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import type { AppLayoutProps } from '../../types/common';
import BaseAppTemplate from '../../components/BaseAppTemplate';

export default async function RootLayout({
  children,
  params
}: AppLayoutProps) {
  const messages = await getMessages();

  return (
    <html lang={params.locale as string}>
      <NextIntlClientProvider messages={messages}>
        <BaseAppTemplate params={params}>
          {children}
        </BaseAppTemplate>
      </NextIntlClientProvider>
    </html>
  );
}
