import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { ApolloProvider } from '@apollo/client';
import App from '../components/pages/App';
import { useApollo } from '../ownHooks';
import { AuthProvider } from '../HoC';

function MyApp(props) {
  const { pageProps, pageProps: { initialApolloState } } = props;
  const apolloClient = useApollo(initialApolloState);
  const newProps = { ...props, pageProps: omit(pageProps, ['initialApolloState']) };

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <App {...newProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

MyApp.defaultProps = {
  pageProps: {},
};

MyApp.propTypes = {
  pageProps: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    initialApolloState: PropTypes.object,
  }),
};

export default MyApp;
