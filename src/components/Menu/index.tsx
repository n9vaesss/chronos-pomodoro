import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

type AvalibleThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvalibleThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvalibleThemes) || 'dark';

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <div className={styles.menu}>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Go to Home'
          title='Got o home'
        >
          <HouseIcon />
        </a>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='See history'
          title='See history'
        >
          <HistoryIcon />
        </a>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Settings'
          title='Settings'
        >
          <SettingsIcon />
        </a>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Change theme'
          title='Change theme'
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </a>
      </div>
    </nav>
  );
}
