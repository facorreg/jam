import React from 'react';
import PropTypes from 'prop-types';
import PromoStyle from './styles';

const ProductPromo = ({ promo, cName }) => (
  promo ? <PromoStyle className={cName}>{`${promo}%`}</PromoStyle> : null
);

ProductPromo.propTypes = {
  promo: PropTypes.number,
  cName: PropTypes.string,
};

ProductPromo.defaultProps = {
  promo: 0,
  cName: '',
};

export default ProductPromo;
