import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  *:focus {
    outline: 0
  }

/* 1rem = 10px */
  html {
    font-size: 62.5%;
    /* font-size: 100%; */
  }


  html, body, #root{
    height: 100%
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 1.4rem 'Roboto', sans-serif;
  }

  a {
    text-decoration: none
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
