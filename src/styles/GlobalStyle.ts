import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    font: inherit;
  }

  input, textarea {
    font: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;