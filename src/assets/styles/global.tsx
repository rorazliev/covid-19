import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  html {
    font-family: system-ui, -apple-system, "Segoi UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",  "Liberation Sans", sans-serif;
  }

  #root {
    flex-direction: column;
    display: flex;
  }
`;

export default GlobalStyle;
