import React from 'react';
import ProductPage from '../../components/pages/ProductPage';
import getStaticUniversal from '../../static';

/*
  gerer ca en grid
*/

const Product = (props) => <ProductPage {...props} />;

export const getStaticProps = (context) => getStaticUniversal({ pathname: '/product/[id]', args: { context } })();

export const getStaticPaths = getStaticUniversal({ pathname: '/product/[id]', type: 'paths' });

export default Product;
