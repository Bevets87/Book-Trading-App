import { createGlobalStyle } from 'styled-components'
import { serif } from './typography'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Signika');
  *,
  *::after,
  *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${serif};
    box-sizing: border-box;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles 

