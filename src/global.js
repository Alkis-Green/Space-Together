import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  } */

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
}`;

// border: ${({ theme }) => theme.border};
