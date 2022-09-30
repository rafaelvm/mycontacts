import { createGlobalStyle } from "styled-components";
import theme from "./theme/defaultTheme";

type ThemeType = typeof theme;

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    background: ${theme.colors.background};
    font-size: 16px;
    font-family: 'Sora', sans-serif;
    color: ${theme.colors.gray[900]};
  }
  button {
    cursor: pointer;
  }
  .mainContainer {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 16px;
  }
`;

export default GlobalStyles;
