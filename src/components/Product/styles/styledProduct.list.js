import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ogProduct from './styledProduct';

const ProductStyle = styled(ogProduct)`
  width: 300px;
  height: 500px;
  grid-template-areas: 
    "img      img"
    "pbrand   pbrand"
    "pname    pname"
    "pDescr   pDescr"
    "ppromo   ."
    ".        ."
    "pprice   addToCart";

  grid-template-rows: 204px 32px 27px 14px auto auto 50px;
  
  border: 2px solid rgba(51, 51, 51, .2);
  margin: 10px;
  padding: 14px;
  grid-row-gap: 12px;

  .productBrand {
    font-size: 20px;
  }

  .productName {
    font-size: 15px;
  }

  .description {
    font-size: 12px;
  }

  .priceContainer {
    margin: 5px 0;
  }

  .cartButtonContainer {
    height: 50px;
    margin: 5px 0;
    margin-left: auto;
    margin-top: auto;
  }
`;

const Product = ({ shouldDisplay, children }) => (
  <ProductStyle shouldDisplay={shouldDisplay} imgHeight="204px" imgWidth="100%">{children}</ProductStyle>
);

Product.propTypes = {
  shouldDisplay: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Product;
