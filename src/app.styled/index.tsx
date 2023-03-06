import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCss';

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-main: #e1e1e1;
    }
    ${resetCSS};    
`;
