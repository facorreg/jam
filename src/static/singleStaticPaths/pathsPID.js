import { initializeApollo } from '../../apollo';
import { getProducts } from '../../apollo/queries';

const pathsPID = async () => {
  try {
    const client = initializeApollo();

    const data = await client.query({ query: getProducts });
    const products = data?.data?.products?.filter((e) => !e);
    if (!products || !products.length) return Promise.reject(new Error('no path'));

    const paths = products.map(({ id: pid } = {}) => (pid ? { params: { pid } } : null))
      .filter((e) => e);

    if (!paths.length) {
      return Promise.reject(new Error('no path'));
    }
    return Promise.resolve({ paths });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default pathsPID;
