import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apolloClient';
import App from '../components/pages/App';

function MyApp(props) {
  // eslint-disable-next-line react/prop-types
  const { pageProps: { initialApolloState } } = props;
  const apolloClient = useApollo(initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <App {...props} client={apolloClient} />
    </ApolloProvider>
  );
}

export default MyApp;
