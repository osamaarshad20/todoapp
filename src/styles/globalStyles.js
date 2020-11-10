import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
