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
`;

export { GlobalStyle, AppStyle };
