import { createGlobalStyle } from 'styled-components';

import light from '.';

type Theme = typeof light;

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    font-family: ${({ theme }) => theme.fonts.body};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.neutral.white};
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }
  
  .ps__thumb-y {
    background-color: ${({ theme }) => theme.colors.brand.default};
  }
`;

export default GlobalStyle;
