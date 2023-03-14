import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    outline: none;
  }
  body, HTML, #root, .App {
    width: 100vw;
    height: 100vh;
    background-color: #1c1c1c;
  }
`;

export const DefaultInput = css`
  /* padding: 1em;
  margin: 2em; */
`;
