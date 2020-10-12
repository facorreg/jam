import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ProductPageStyle from './style';
import ProductPromo from '../../ProductPromo';
import AddButton from '../../AddButton';
import { useCachedCart } from '../../../ownHooks';

const ProductPage = ({ product }) => {
  const { loading, updateItemQuantity, getItemQuantity } = useCachedCart();

  const {
    id,
    name,
    price,
    images,
    ref,
    description,
    // type,
    promotions,
  } = product;

  const { medium } = images;

  return (
    <ProductPageStyle>
      <div className="productDisplayContainer">
        <img className="productImg" src={medium} alt="product" />
        <div className="productBrand">{ref.toUpperCase()}</div>
        <div className="productName">{name}</div>
        {promotions ? <ProductPromo cName="productPromo" promo={promotions} /> : null}
        <div className="productPrice">{`${price} €`}</div>
        <div className="productDescr">
          {`Le paquet de 500g ${price * 2} € / Kg`}
        </div>
        <AddButton
          cName="textCartButtonContainer"
          productId={id}
          displayAsText
          quantity={!loading ? getItemQuantity(id) : 0}
          updateItemQuantity={updateItemQuantity}
        />
      </div>
      <div className="recommand">@todo: add data</div>
      <div className="infoContainer">
        <div className="dcontainer" key={uuidv4()}>
          <div className="dtype">Description</div>
          <div className="ddescription">{description}</div>
        </div>
      </div>
    </ProductPageStyle>
  );
};

ProductPage.default = {
  promotions: 0,
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      large: PropTypes.string.isRequired,
      medium: PropTypes.string.isRequired,
      small: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired,
    }),
    ref: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    promotions: PropTypes.number,
  }).isRequired,
};

export default ProductPage;
