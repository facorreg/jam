import { initializeApollo } from '../../apollo';
import { getProducts } from '../../apollo/queries';

const pathsPID = async () => {
  try {
    const client = initializeApollo();

    const data = await client.query({ query: getProducts });
    const paths = (data?.data?.products || []).map(({ id: pid }) => ({ params: { pid } }));
    return Promise.resolve({ paths });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default pathsPID;
