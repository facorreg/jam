import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import { useQuery } from '@apollo/client';
import { getProducts } from '../../apollo/queries';

/*
  @todo: actual products
  move style elsewhere
  handle products properly
*/

const List = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  width: 100vw;
  margin: 40px 0px;

  & .productListContainer {
    min-height: auto;
    border: 1px solid black;
    grid-column: 2;
    display: flex;
    ${'' /* flex-direction: row; */}
    flex-wrap: wrap;
    justify-content: space-between;

    & .product {
      width: 250px;
      height: 250px;
      text-align: center;
      border: 1px solid red;
      margin: 10px;
    }
  }
`;

// const Product = (props) => (
//   <>
//     {
//       props.products.map(({ product_name: productName }) => <div className>{productName}</div>)
//     }
//   </>
// );

const ProductList = () => {
  const data = useQuery(getProducts, { variables: { limit: 10 } });

  if (!(get(data, 'data.products', []).length)) return <></>;

  return (
    <List>
      <div className="productListContainer">
        {
          data.data.products.map(({ product_name: productName }) => <div className="product">{productName}</div>)
        }
      </div>
    </List>
  );
};

export default ProductList;
