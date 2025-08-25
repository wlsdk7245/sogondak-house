import { createGlobalStyle } from 'styled-components';
import Reset from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #00a063;
        --color-main-hover: #00a06347; 
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
