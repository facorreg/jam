import { getProducts } from '../../apollo/queries';
import { initializeApollo } from '../../apollo';

const fetchProductsData = async (variables = { limit: 100 }) => {
  const apolloClient = initializeApollo();

  try {
    await apolloClient.query({
      query: getProducts,
      variables,
    });

    return Promise.resolve({
      initialApolloState: apolloClient.cache.extract(),
    });
  } catch (error) {
    return Promise.reject(error, 'Failed to get Products the from graphql endpoint');
  }
};

export default fetchProductsData;
