import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ProductPromo from '../ProductPromo';
import ProductStyle from './styles';
import AddButton from '../AddButton';

/*
  preload: https://github.com/cyrilwanner/next-optimized-images
*/

const ProductItem = ({
  product: {
    id,
    name,
    price,
    images,
    ref,
    description,
    promotions,
  },
}) => {
  const [imgLoaded, setLoadingStatus] = useState(false);
  const onload = () => setLoadingStatus(true);
  const router = useRouter();
  const { medium } = images;

  const handleClick = () => { router.push(`/product/${id}`); };
  return (
    <ProductStyle className="product" shouldDisplay={imgLoaded}>
      <button type="button" className="imgContainer" onClick={handleClick}>
        <img src={medium} onLoad={onload} alt="productImg" />
      </button>
      <div className="brandInfo">{ref.toUpperCase()}</div>
      <div className="productNameInfo">{name}</div>
      <div className="descriptionInfo">{description}</div>
      { promotions ? <ProductPromo cName="productPromo" promo={promotions} /> : null}
      <div className="priceAndCartContainer">
        <div className="priceContainer">
          <div className="price">{`${price} €`}</div>
          <div className="priceKg">{`${price * 2} € / kg`}</div>
        </div>
        <AddButton cName="cartButtonContainer" productId={id} />
      </div>
    </ProductStyle>
  );
};

ProductItem.default = {
  promotions: 0,
};

ProductItem.propTypes = {
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
    promotions: PropTypes.number,
  }).isRequired,
};

export default ProductItem;
