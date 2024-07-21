import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

import { appName } from '../../config';
import NavigationLink from '../NavigationLink';
import AppLogo from './AppLogo';
import AppSettings from './AppSettings';
import UserMenu from './UserMenu';

export default function AppHeader() {
  const t = useTranslations('Navigation');

  return (
    <Navbar isBordered>
      <NavbarBrand>
        <AppLogo />
        <p className="font-bold text-inherit">{appName}</p>
      </NavbarBrand>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      >
        <NavbarItem>
          <NavigationLink href="/">{t('home')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
          <NavigationLink href="/articles">{t('articles')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
          <NavigationLink href="/contacts">{t('contacts')}</NavigationLink>
        </NavbarItem>
        <NavbarItem>
          <NavigationLink href="/dashboard">{t('dashboard')}</NavigationLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        as="div"
        justify="end"
      >
        <AppSettings />
        <UserMenu />
        <Button
          as={NavigationLink}
          color="primary"
          href="/signin"
          size="sm"
          variant="bordered"
        >
          Sign In
        </Button>
        <Button
          as={NavigationLink}
          color="secondary"
          href="/signup"
          size="sm"
          variant="bordered"
        >
          Sign Up
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
