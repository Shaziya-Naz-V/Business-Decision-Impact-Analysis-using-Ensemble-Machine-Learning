import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
     scroll-behavior: smooth;
  }

  body {
    background: radial-gradient(circle, #0f2a44, #060b1a);
    color: #ffffff;
  }
`;
