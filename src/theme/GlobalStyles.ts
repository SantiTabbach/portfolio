import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Poppins, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    transition: all 0.20s linear;
  }
  `;
