import { useTranslations } from 'next-intl';
import './styles.scss';

import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import { ThemeSwitcher } from './ThemeSwitcher';

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
      <LocaleSwitcher />
      <ThemeSwitcher />
    </nav>
  );
}
