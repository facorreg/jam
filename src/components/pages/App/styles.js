import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const AppStyle = styled.div`
  display: grid;
  grid-template-areas: 
    'header'
    'main'
  ;

  #header {
    margin-bottom: 40px;
  }
`;

export { GlobalStyle, AppStyle };
