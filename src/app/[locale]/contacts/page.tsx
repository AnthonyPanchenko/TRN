import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export default function Contacts() {
  const t = useTranslations('Contacts');

  return (
    <main className={styles.contacts}>
      <article>
        <h1>{t('title')}</h1>
      </article>
    </main>
  );
}
