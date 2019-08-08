import { createGlobalStyle } from 'styled-components';
import background from '../assets/background-1.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }

  body {
    background: #052746 url(${background}) no-repeat center top;
    /* background: #052746; */
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 16px Roboto, sans-serif;
    
  }

  button {
    border: none;
  }

  #root {
    width: 100%;
    max-width: 1020px;
    margin: 280px auto;
    padding: 0 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }

`;
