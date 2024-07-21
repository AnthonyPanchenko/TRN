import type { AppLayoutProps } from '../types/common';
import AppHeader from './AppHeader';
import Footer from './Footer';
import './styles.scss';

export default function BaseAppTemplate({ children }: AppLayoutProps) {
  return (
    <>
      <AppHeader />
      <main className="mb-auto">{children}</main>
      <Footer />
    </>
  );
}
