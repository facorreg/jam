import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo/apolloClient';
import App from '../components/pages/App';

function MyApp(props) {
  return (
    <ApolloProvider client={client}>
      <App {...props} />
    </ApolloProvider>
  );
}

export default MyApp;
