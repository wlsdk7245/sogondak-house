import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #e1e1e1;
    }

    body {
        max-width: 100vw;
        min-width: 100vw;
        width: 100vw;
          &::-webkit-scrollbar {
    display: none;
  }
    }

    
    ${resetCSS};    
`;
