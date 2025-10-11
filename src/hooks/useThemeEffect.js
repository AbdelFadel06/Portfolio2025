// hooks/useThemeEffect.js
import { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export const useThemeEffect = () => {
  const { isDark } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
  }, [isDark]);
};
