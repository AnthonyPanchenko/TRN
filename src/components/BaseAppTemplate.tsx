import './styles.scss';
import { Nunito } from 'next/font/google';
import { Suspense } from 'react';

import Navigation from './Navigation';
import type { AppLayoutProps } from '../types/common';
import { appName } from '../config';
import RootPreloader from './RootPreloader';

const nunito = Nunito({ subsets: ['cyrillic'] });

export default function BaseAppTemplate({
  children,
}: AppLayoutProps) {
  return (
    <body className={nunito.className}>
      <header>
        <Navigation />
      </header>
      <Suspense fallback={<RootPreloader />}>
        {children}
      </Suspense>
      <footer className="footer">
        © Copyright {new Date().getFullYear()} {appName}.
      </footer>
    </body>
  );
}
