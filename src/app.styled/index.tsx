import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #e1e1e1;
    }

    body {
        width: 100%;
        max-width: 100vw;
          &::-webkit-scrollbar {
        display: none;
        }
    }

    
    ${resetCSS};    
`;
