import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { useRouter } from 'next/router';
import PromotionIndicator from '../PromotionIndicator';

import {
  ProductStyle,
  BrandInfos,
  ImgContainer,
  ProductNameInfos,
  DescriptionsInfos,
  PriceAndCartContainer,
  PriceContainerDiv,
  PriceDiv,
  PriceKgDiv,
  CartButton,
} from './styles';
/*
  @todo: actual products
  handle products properly
*/

/*
  preload: https://github.com/cyrilwanner/next-optimized-images
*/

const ProductItem = ({
  product: {
    id,
    productName,
    price,
    productImgUrl,
    productBrand,
    description,
    promotions,
  },
}) => {
  const [imgLoaded, setLoadingStatus] = useState(false);
  const onload = () => setLoadingStatus(true);
  const router = useRouter();

  const handleClick = () => { router.push(`/product/${id}`); };
  return (
    <ProductStyle className="product">
      <ImgContainer shouldDisplay={imgLoaded} onClick={handleClick}>
        <img src={productImgUrl} onLoad={onload} alt="productImg" />
      </ImgContainer>
      <BrandInfos>{productBrand.toUpperCase()}</BrandInfos>
      <ProductNameInfos>{productName}</ProductNameInfos>
      <DescriptionsInfos>{description}</DescriptionsInfos>
      <PromotionIndicator promoTag={promotions ?? '-10%'} />
      <PriceAndCartContainer>
        <PriceContainerDiv>
          <PriceDiv>{`${price} €`}</PriceDiv>
          <PriceKgDiv>{`${price * 2} € / kg`}</PriceKgDiv>
        </PriceContainerDiv>
        <CartButton><img src="/cartBlack.png" alt="cart" /></CartButton>
      </PriceAndCartContainer>
    </ProductStyle>
  );
};

ProductItem.propTypes = {
  product: Proptypes.shape({
    id: Proptypes.string.isRequired,
    productName: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    productImgUrl: Proptypes.string.isRequired,
    productBrand: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    promotions: Proptypes.string,
    // productId: Proptypes.string.isRequired,
  }).isRequired,
};

export default ProductItem;
