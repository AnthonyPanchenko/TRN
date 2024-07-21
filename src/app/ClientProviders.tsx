'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

import type { LocaleCodes } from '../constants/localization';

type PropsTypes = {
  children: React.ReactNode | Array<React.ReactNode>;
  locale: LocaleCodes;
};

export default function ClientProviders({ children, locale }: PropsTypes) {
  const router = useRouter();

  return (
    <SessionProvider>
      <NextUIProvider
        className="flex min-h-screen flex-col justify-between"
        locale={locale}
        navigate={router.push}
      >
        <NextThemesProvider
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
