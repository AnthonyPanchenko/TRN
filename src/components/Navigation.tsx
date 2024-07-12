import { useTranslations } from 'next-intl';
import './styles.scss';

import AppSettings from './AppSettings';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className="navigation">
      <div className="menu">
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/articles">{t('articles')}</NavigationLink>
        <NavigationLink href="/contacts">{t('contacts')}</NavigationLink>
        <NavigationLink href="/dashboard">{t('dashboard')}</NavigationLink>
      </div>
      <AppSettings />
    </nav>
  );
}
