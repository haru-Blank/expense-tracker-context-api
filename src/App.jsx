import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/Global.css';
import { darkTheme, lightTheme } from './Components/Theme';
import { useDarkMode } from './Hooks/useDarkMode';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          hello dark mode
          <button onClick={themeToggler}>Theme Toggle</button>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
