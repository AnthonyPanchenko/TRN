'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger
} from '@nextui-org/react';
import type { PressEvent } from '@react-types/shared';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { LuSettings2 } from 'react-icons/lu';

import { locales } from '../config';
import { usePathname, useRouter } from '../navigation';

enum ThemeModes {
  LIGHT = 'light',
  SYSTEM = 'system',
  DARK = 'dark',
}

const themeModes = Object.values(ThemeModes);

export default function AppSettings() {
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0';
  const [currentTheme, setCurrentTheme] = useState<ThemeModes | string>();
  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const handleChangeLanguage = (event: PressEvent) => {
    console.log(event);
    // const nextLocale = event.target.value;
    // startTransition(() => {
    //   router.replace(
    //     // @ts-expect-error -- TypeScript will validate that only known `params`
    //     // are used in combination with a given `pathname`. Since the two will
    //     // always match for the current route, we can skip runtime checks.
    //     { pathname, params },
    //     { locale: nextLocale }
    //   );
    // });
  };

  // if (!currentTheme) return null;

  const handleChangeTheme = (event: PressEvent) => {
    console.log(event);
    // setTheme('light')
  };

  return (
    <Dropdown
      showArrow
      classNames={{
        base: 'before:bg-default-200', // change arrow background
        content: 'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
      }}
    >
      <DropdownTrigger>
        <Button
          // variant="bordered"
          isIconOnly
          aria-label="Like"
          color="danger"
        >
          <LuSettings2 />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown menu with description" variant="faded">
        <DropdownSection showDivider title="Theme">
          {themeModes.map((mode) => (
            <DropdownItem
              key={mode}
              // startContent={<AddNoteIcon className={iconClasses} />}
              shortcut="⌘⇧D"
              onPress={handleChangeTheme}
            >
              {mode}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection title="Language">
          {locales.map((cur) => (
            <DropdownItem
              key={cur}
              // startContent={<AddNoteIcon className={iconClasses} />}
              shortcut="⌘⇧E"
              onPress={handleChangeLanguage}
            >
              {t(cur)}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
