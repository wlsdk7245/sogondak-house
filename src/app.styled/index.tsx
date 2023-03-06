import { createGlobalStyle } from 'styled-components';
import Reset from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #e1e1e1;
    }

    body {
        width: 100%;
          &::-webkit-scrollbar {
        display: none;
        }
    }

    
    ${Reset};    
`;
