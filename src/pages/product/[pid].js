import React from 'react';
import ProductPage from '../../components/pages/ProductPage';
import getStaticUniversal from '../../static';

/*
  gerer ca en grid
*/

const Product = (props) => {
  const type = 'Nam scelerisque';

  // @todo mieux mocker la data;
  const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Nullam in quam nec ex mattis ultrices sit amet at lorem',
    'Aliquam mollis leo eleifend nisl consequat rutrum',
    'Donec tortor augue, malesuada at rutrum sed, vehicula et ex',
    'Duis vitae lorem mauris',
    'Aliquam sit amet lacus massa',
    'Sed bibendum congue lacus',
    'Donec consectetur interdum eros, id interdum neque semper ac',
    'Nam et dui commodo, fringilla ligula id, dapibus ligula',
  ];

  // eslint-disable-next-line react/prop-types
  const { product: p } = props;
  const product = { ...p, type, descriptions };
  return <ProductPage product={product} />;
};

export const getStaticProps = (context) => getStaticUniversal({ pathname: '/product/[id]', args: { context } })();

export const getStaticPaths = getStaticUniversal({ pathname: '/product/[id]', type: 'paths' });

export default Product;

// const data = await client.query({ query: getProducts });
// const paths = data.data.products.map(({ id: pid }) => ({ params: { pid } }));
// return { paths, fallback: true };
