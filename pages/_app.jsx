import { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /*
    PT Serif: 400, 700
    Poppins: 500, 700  
  */

  :root {
    --titles: 'PT Serif', serif;
    --texts: 'Poppins', sans-serif;
    --white-blue: #E9FFF9;
    --light-blue: #9ED8DB;
    --blue: #467599;
    --dark-blue: #1D3354;
    --red: #D64045;
  }

  *, 
  *::before, 
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--texts);
    font-weight: 500;
    background-color: var(--dark-blue);
    color: var(--white-blue);
    
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--titles);
    font-weight: 400;
  }

  a {
    color: var(--white-blue);
    text-decoration: none;

    :hover {
      border-bottom: 0.2rem solid var(--red);
      opacity: 0.8;
    }
  }

  input {
    background-color: var(--light-blue);
    font-family: var(--texts);
    padding: 1rem;
    font-weight: 700;
    border: none;
    color: var(--dark-blue);
    border-radius: 2rem;
    width: 30rem;

    :focus {
      outline: 0.15rem solid var(--red);
    }
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
