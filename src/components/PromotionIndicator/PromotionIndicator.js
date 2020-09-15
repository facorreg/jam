import React from 'react';
import PropTypes from 'prop-types';
import PromotionStyle from './styles';

const PromotionIndicator = ({ promoTag }) => (
  <PromotionStyle>
    <div className="promotion">{promoTag}</div>
  </PromotionStyle>
);

PromotionIndicator.propTypes = {
  promoTag: PropTypes.string.isRequired,
};

export default PromotionIndicator;
