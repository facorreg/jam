import React from 'react';
import { ApolloProvider } from '@apollo/client';
import App from '../components/pages/App';
import { useApollo } from '../ownHooks';
import { AuthProvider } from '../HoC';

function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  // const { pageProps: { initialApolloState } } = props;
  const apolloClient = useApollo();

  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <App {...props} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
