import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
	font-family: 'Poppins', sans-serif;
  }

  body {
    background: #191d20;
    display: flex;
    justify-content: center;
  }

  h1 {
	color: #fff;
  	margin-bottom: 0.5rem;
  	font-size: 1.75rem;
  }

  h2 {
  	color: #fff;
  	margin-bottom: 0.5rem;
  	font-size: 1.75rem;
  	text-align: center;
  }

  a {
  text-decoration: none;
  color: white;
  }

`;

export default GlobalStyles;
