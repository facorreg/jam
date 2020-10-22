import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductPromo from '../ProductPromo';
import AddButton from '../AddButton';
import { useAuth, useCachedCart } from '../../ownHooks';
import ProductImg from './ProductImg';
import productStyles from './styles';
import { roundToNthDeci } from '../../utils';

const Product = ({
  product: {
    id,
    name,
    price,
    // images,
    ref,
    description,
    promotions,
  },
  page,
}) => {
  const [imgLoaded, setLoadingStatus] = useState(false);
  const { isAuthenticated, loading: authLoad } = useAuth();
  const [quantity, setQuantity] = useState(0);
  const { loading: cartLoad, updateItemQuantity, getItemQuantity } = useCachedCart();

  useEffect(() => {
    const shouldUpdate = !authLoad && !cartLoad;
    const newQuantity = isAuthenticated ? getItemQuantity(id) : 0;
    if (shouldUpdate && newQuantity !== quantity) setQuantity(newQuantity);
  });

  // const { medium } = images;

  const { [page]: Style } = productStyles;

  if (!Style) return null;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const displayPrice = page === 'ProductCart' ? roundToNthDeci(price * quantity) : price;

  return (
    <Style shouldDisplay={imgLoaded}>
      <ProductImg
        page={page}
        src={`https://picsum.photos/id/${getRandomInt(1000)}/640/480`}
        pUrl={`/product/${id}`}
        setLoadingStatus={setLoadingStatus}
      />
      <div className="productBrand">{ref.toUpperCase()}</div>
      <div className="productName">{name}</div>
      {page === 'pageList' && <div className="description">{description}</div>}
      {promotions ? <ProductPromo cName="productPromo" promo={promotions} /> : null}
      <div className="priceContainer">
        <div className="price">{`${displayPrice} €`}</div>
        <div className="priceKg">{`${price * 2} € / kg`}</div>
      </div>
      <AddButton
        cName="cartButtonContainer"
        productId={id}
        quantity={quantity}
        updateItemQuantity={updateItemQuantity}
      />
    </Style>
  );
};

Product.propTypes = {
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
  page: PropTypes.string.isRequired,
};

export default Product;
