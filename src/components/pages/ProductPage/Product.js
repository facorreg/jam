import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ProductPageStyle from './style';

const ProductPage = ({ product }) => {
  const {
    productName,
    price,
    productImgUrl,
    productBrand,
    descriptions,
    type,
  } = product;

  return (
    <ProductPageStyle productImgUrl={productImgUrl}>
      <div className="productDisplayContainer">
        <img className="productImg" src={productImgUrl} alt="product" />
        <div className="productBrand">{productBrand.toUpperCase()}</div>
        <div className="productName">{productName}</div>
        <div className="productPromo">-10%</div>
        <div className="productPrice">{`${price} €`}</div>
        <div className="productDescr">
          {`Le paquet de 500g ${price * 2} € / L`}
        </div>
        <div className="addToCart">Ajouter au panier</div>
      </div>
      <div className="recommand">@todo: add data</div>
      <div className="infoContainer">
        {
          descriptions.map((description) => (
            <div className="dcontainer" key={uuidv4()}>
              <div className="dtype">{type}</div>
              <div className="ddescription">{description}</div>
            </div>
          ))
        }
      </div>
    </ProductPageStyle>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImgUrl: PropTypes.string.isRequired,
    productBrand: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductPage;
