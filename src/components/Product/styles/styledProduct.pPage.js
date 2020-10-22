import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ogProduct from './styledProduct';

const ProductStyle = styled(ogProduct)`
  grid-area: product;
  grid-column-gap: 2%;

  grid-template-areas: 
    "img pbrand    ."
    "img pname     ."
    "img .         ."
    "img ppromo    ."
    "img .         ."
    "img pDescr    ."
    "img pprice    ."
    "img .         ."
    "img addToCart ."
  ;

  grid-template-columns: 327px auto;
  grid-template-rows: 35px 35px 10px 35px 15px 35px auto auto 44px;
  
  > .productBrand,
  > .productName,
  > .productPromo,
  > .productPrice {
    line-height: 35px;
  }

  > .productName,
  > .productPromo,
  > .productPrice,
  > .addToCart {
    font-weight: bold;
  }

  .productBrand {
    font-size: 25px;
  }

  .productName {
    font-size: 25px;
  }
  
  .priceContainer {
    margin: 5px 0;
    font-size: 1.6em;
  }
}
`;

const Product = ({ shouldDisplay, children }) => (
  <ProductStyle shouldDisplay={shouldDisplay} imgHeight="327px" imgWidth="327px">{children}</ProductStyle>
);

Product.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Product;
