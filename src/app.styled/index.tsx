import { createGlobalStyle } from 'styled-components';
import Reset from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #FF008C;
        --color-sub: #628AED;
    }

    body {
        width: 100%;
          &::-webkit-scrollbar {
        display: none;
        }
    }

    
    ${Reset};    


`;
