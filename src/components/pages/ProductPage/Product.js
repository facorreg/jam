import React from 'react';
import PropTypes from 'prop-types';
import ProductPageStyle from './style';
import Product from '../../Product';

const ProductPage = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const { id, description } = props?.product || {};

  return (
    <ProductPageStyle>
      <Product {...props} page="ProductPage" />
      <div className="infoContainer">
        <div className="dcontainer" key={id}>
          <div className="dtype">Description</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </ProductPageStyle>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductPage;
