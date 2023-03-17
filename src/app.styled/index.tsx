import { createGlobalStyle } from 'styled-components';
import Reset from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #FF008C;
        --color-main-hover: #ff008c47; 
        --color-sub: #628AED;
        --color-white-hover: #ffffffa1;
    }

    body {
        width: 100%;
          &::-webkit-scrollbar {
        display: none;
        }
    }

    
    ${Reset};    


`;
