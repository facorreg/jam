import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ogProduct from './styledProduct';

const ProductStyle = styled(ogProduct)`
  grid-template-areas:
    "img pbrand       pbrand   pprice"  
    "img .            .        ."
    "img pname        pname    ."
    "img .            .        ."
    "img addToCart    .        ."
  ;

  grid-template-columns: 220px auto auto auto;
  grid-template-rows: 25px 10px 25px auto auto;
  grid-column-gap: 20px;
  padding: 20px;
  margin: 10px 0;
  border: 1px solid black;

  .imgContainer {
    grid-area: img;
  }

  .productbrand {
    grid-area: pbrand;
    line-height: 25px;
    font-size: 25px;
    font-weight: bold;
  }

  .priceContainer {
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    grid-area: pprice;
    align-items: flex-end;

    & div {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .productName {
    grid-area: pname;
    line-height: 25px;
    font-size: 25px;
  }

  .cartButtonContainer {
    grid-area: addToCart;
  }
`;

const Product = ({ shouldDisplay, children }) => (
  <ProductStyle shouldDisplay={shouldDisplay} imgSize="180px">{children}</ProductStyle>
);

Product.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Product;
