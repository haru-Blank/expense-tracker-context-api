import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    --income: #2ecc71;
    --expense: #c0392b;

    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
                   0 1px 2px rgba(0, 0, 0, 0.24);
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
    justify-content: center;
    // align-items: center;

    height: 100vh;

    font-family: 'Red Hat Mono', monospace;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.7;

    background: ${({ theme }) => theme.body};
`;
