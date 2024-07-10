'use client';

import clsx from 'clsx';
import { useParams } from 'next/navigation';
import type { ChangeEvent } from 'react';
import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useRouter, usePathname } from '../navigation';
import { locales } from '../config';

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t(cur)}
          </option>
        ))}
      </select>
    </label>
  );
}
