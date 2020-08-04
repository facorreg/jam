import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Head from '../components/Head';
import Header from '../components/Header/Header';

/*
  @TODO: Move the style elsewhere
*/

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

function MyApp({ Component, pageProps }) {
  return (
    <AppStyle>
      <GlobalStyle />
      <Head />
      <Header />
      <Component {...pageProps} />
    </AppStyle>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};

MyApp.defaultProps = { pageProps: {} };
export default MyApp;
