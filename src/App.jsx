import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/Global.css';
import { Title } from './Components/Text';
import { darkTheme, lightTheme } from './Components/Theme';
import { useDarkMode } from './Hooks/useDarkMode';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <div className="App">
          <Title>Expense Tracker</Title>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
