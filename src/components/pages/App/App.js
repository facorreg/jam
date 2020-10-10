import React from 'react';
import PropTypes from 'prop-types';
import Head from '../../Head';
import Header from '../../Header';
import { GlobalStyle, AppStyle } from './styles';
import Modal from '../../Modal';

const App = ({ Component, pageProps }) => (
  <AppStyle>
    <Modal>
      <GlobalStyle />
      <Head />
      <Header />
      <Component {...pageProps} />
    </Modal>
  </AppStyle>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object,
};

App.defaultProps = { pageProps: {} };
export default App;
