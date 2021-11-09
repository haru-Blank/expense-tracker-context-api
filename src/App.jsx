import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './Components/Global.css';
import { darkTheme, lightTheme } from './Components/Theme';

const App = () => {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <>
        <GlobalStyle />
        <div className="App">hello dark mode</div>
      </>
    </ThemeProvider>
  );
};

export default App;
