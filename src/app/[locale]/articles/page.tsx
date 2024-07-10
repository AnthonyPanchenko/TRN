import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

export default function Articles() {
  const t = useTranslations('Articles');

  return (
    <main className={styles.article}>
      <article>
        <h1>{t('title')}</h1>
      </article>
    </main>
  );
}
