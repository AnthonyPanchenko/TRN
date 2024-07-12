import './styles.scss';

import { appName } from '../config';
import type { AppLayoutProps } from '../types/common';
import Navigation from './Navigation';

export default function BaseAppTemplate({
  children,
}: AppLayoutProps) {
  return (
    <>
      <header>
        <Navigation />
      </header>
      {children}
      <footer className="footer">
        © Copyright {new Date().getFullYear()} {appName}.
      </footer>
    </>
  );
}
