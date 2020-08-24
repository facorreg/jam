import React, { useState } from 'react';
import Proptypes from 'prop-types';
import {
  ProductStyle,
  BrandInfos,
  ImgContainer,
  ProductNameInfos,
  DescriptionsInfos,
  Promotion,
  PromotionContainer,
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

const Product = ({
  product: {
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
  return (
    <ProductStyle className="product">
      <ImgContainer shouldDisplay={imgLoaded}>
        <img src={productImgUrl} onLoad={onload} alt="productImg" />
      </ImgContainer>
      <BrandInfos>{productBrand.toUpperCase()}</BrandInfos>
      <ProductNameInfos>{productName}</ProductNameInfos>
      <DescriptionsInfos>{description}</DescriptionsInfos>
      <PromotionContainer>
        <Promotion>{promotions ?? '-10%'}</Promotion>
      </PromotionContainer>
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

Product.propTypes = {
  product: Proptypes.shape({
    // productId: Proptypes.string.isRequired,
    productName: Proptypes.string.isRequired,
    price: Proptypes.number.isRequired,
    productImgUrl: Proptypes.string.isRequired,
    productBrand: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    promotions: Proptypes.string,
    // productId: Proptypes.string.isRequired,
  }).isRequired,
};

export default Product;
