import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getEnv } from '../utils';

const client = new ApolloClient({
  uri: getEnv('STRAPI_GRAPHQL'),
  cache: new InMemoryCache(),
});

export default client;
