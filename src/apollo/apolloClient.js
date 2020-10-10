import { useMemo } from 'react';
import {
  ApolloClient, HttpLink, InMemoryCache, concat, ApolloLink, gql,
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import { getCookie } from '../utils';

let apolloClient;

function createApolloClient() {
  const httpLink = new HttpLink({
    uri: 'http://localhost:1337/graphql', // Server URL (must be absolute)
    // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });

  const authMiddleWare = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const { jwt } = getCookie('user', {});

    if (jwt) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    }

    return forward(operation);
  });

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: concat(authMiddleWare, httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            products: concatPagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState) {
  const client = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    client.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return client;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = client;

  return client;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
