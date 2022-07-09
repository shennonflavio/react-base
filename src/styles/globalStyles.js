import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    left:0;
    box-sizing: border-box;
  }

  body{
     background-color:${({ theme }) => theme.background};
     transition: 1s;
  }

`;
