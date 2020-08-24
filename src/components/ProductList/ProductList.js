import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import ProductListStyle from './styles';
import { getProducts } from '../../apollo/queries';
import { objectListKeysToCamelCase } from '../../utils';
import { useScrollHandler } from '../../ownHooks';
import Product from '../Product';

/*
  @todo: add a loading effect
    check whether there are still things to load
    optimize pictures with next
*/

const ProductList = () => {
  const {
    data = {}, fetchMore, loading, error,
  } = useQuery(getProducts);
  const [nbProductsToDisplay, setNbProductsToDisplay] = useState(20);
  const products = objectListKeysToCamelCase(data.products ?? [], ['__typename']);

  // use isLoadingMpre to handle onscroll loading div
  // eslint-disable-next-line no-unused-vars
  const isLoadingMore = useScrollHandler({
    nbProductsToDisplay,
    productsLength: products.length,
    productLimit: 20,
    fetchMore,
    setNbProductsToDisplay,
  });

  if (loading) return <>Loading</>;
  if (error) return <>Error</>;
  if (!products.length) return <>No product to display</>;

  const productsToDisplay = products.splice(0, nbProductsToDisplay);

  return (
    <ProductListStyle>
      { typeof window !== 'undefined'
        ? (
          <div className="productListContainer">
            {productsToDisplay.map((p) => <Product product={p} key={p.productId} />)}
          </div>
        )
        : null }
    </ProductListStyle>
  );
};

export default ProductList;
