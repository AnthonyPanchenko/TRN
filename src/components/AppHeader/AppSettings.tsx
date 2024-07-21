'use client';

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from '@nextui-org/react';
import type { PressEvent } from '@react-types/shared';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useParams } from 'next/navigation';
import { useTransition } from 'react';

import { LocaleCodes } from '../../constants/localization';
import { usePathname, useRouter } from '../../navigation';
import { AppSettingsIcon, LaptopSystemIcon, MoonIcon, SunIcon, EnglishFlagIcon, UkraineFlagIcon } from './icons';

enum ThemeModes {
  LIGHT = 'light',
  SYSTEM = 'system',
  DARK = 'dark',
}

const themeModeOptions = [
  { id: ThemeModes.LIGHT, Icon: SunIcon },
  { id: ThemeModes.SYSTEM, Icon: LaptopSystemIcon },
  { id: ThemeModes.DARK, Icon: MoonIcon },
];

const languageOptions = [
  { id: LocaleCodes.EN, Icon: EnglishFlagIcon },
  { id: LocaleCodes.UA, Icon: UkraineFlagIcon },
];

export default function AppSettings() {
  const t = useTranslations();

  const { theme, setTheme } = useTheme();

  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();
  const [_isPending, startTransition] = useTransition();

  const handleChangeLanguage = (event: PressEvent) => {
    const value = (event.target as HTMLElement).dataset.key;

    if (value) {
      startTransition(() => {
        router.replace(
          // @ts-expect-error -- TypeScript will validate that only known `params`
          // are used in combination with a given `pathname`. Since the two will
          // always match for the current route, we can skip runtime checks.
          { pathname, params },
          { locale: value },
        );
      });
    }
  };

  const handleChangeTheme = (event: PressEvent) => {
    const value = (event.target as HTMLElement).dataset.key;

    if (value) {
      setTheme(value);
    }
  };

  return (
    <Dropdown
      showArrow
      classNames={{
        base: 'before:bg-default-200', // change arrow background
      }}
    >
      <DropdownTrigger>
        <Button
          isIconOnly
          aria-label="App settings"
          size="sm"
          variant="bordered"
        >
          <AppSettingsIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown menu App settings"
        disabledKeys={[theme, locale] as Iterable<string>}
        variant="faded"
      >
        <DropdownSection
          showDivider
          title="Theme"
        >
          {themeModeOptions.map(({ id, Icon }) => (
            <DropdownItem
              key={id}
              startContent={<Icon />}
              onPress={handleChangeTheme}
            >
              {t(`theme.${id}`)}
            </DropdownItem>
          ))}
        </DropdownSection>
        <DropdownSection title="Language">
          {languageOptions.map(({ id, Icon }) => (
            <DropdownItem
              key={id}
              startContent={<Icon />}
              onPress={handleChangeLanguage}
            >
              {t(`languages.${id}`)}
            </DropdownItem>
          ))}
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
