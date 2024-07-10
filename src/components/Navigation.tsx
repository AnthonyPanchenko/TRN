import './styles.scss';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <nav className="navigation">
      <div className="menu">
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/articles">{t('articles')}</NavigationLink>
        <NavigationLink href="/contacts">{t('contacts')}</NavigationLink>
      </div>
      <LocaleSwitcher />
    </nav>
  );
}
