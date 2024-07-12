'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<undefined | string>();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  if (!currentTheme) return null;

  return (
    <div>
      <button type="button" value={theme} onClick={() => setTheme('light')}>Light</button>
      <button type="button" value={theme} onClick={() => setTheme('system')}>System</button>
      <button type="button" value={theme} onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
