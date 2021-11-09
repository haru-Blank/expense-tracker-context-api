import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: string) => {
    localStorage.setItem('expenseAppTheme', mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light');
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('expenseAppTheme');

    // if (localTheme === undefined) setMode(theme);
    // if (localTheme) setMode(localTheme);

    localTheme || setMode(theme);
    localTheme && setMode(localTheme);
  }, [theme]);

  return [theme, themeToggler];
};
