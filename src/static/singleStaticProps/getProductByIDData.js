import { initializeApollo } from '../../apollo';
import { getProductById } from '../../apollo/queries';
import { objectKeysToCamelCase } from '../../utils';

const getProductByIdData = async ({ context }) => {
  try {
    const { pid } = context.params;
    const client = initializeApollo();

    const productDetails = await client.query({ query: getProductById, variables: { id: pid } });
    const product = productDetails?.data?.product || {};
    return Promise.resolve({
      product: objectKeysToCamelCase(product, ['__typedef']),
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default getProductByIdData;
