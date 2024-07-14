import './styles.scss';

import type { AppLayoutProps } from '../types/common';
import AppHeader from './AppHeader';
import Footer from './Footer';

export default function BaseAppTemplate({
  children,
}: AppLayoutProps) {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      {children}
      <Footer />
    </>
  );
}
