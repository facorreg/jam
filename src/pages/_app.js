import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/apolloClient';
import App from '../components/pages/App';

function MyApp(props) {
  // eslint-disable-next-line
  const apolloClient = useApollo(props.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <App {...props} />
    </ApolloProvider>
  );
}

export default MyApp;
