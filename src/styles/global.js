import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px Roboto, sans-serif;
  }

  #root {
    width: 100%;
    max-width: 1080;
    margin: 0;
    padding: 0 20px;
  }

`;
