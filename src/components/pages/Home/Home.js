import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../Carousel';
import HomeStyle from './styles';
import ProductList from '../../ProductList';

const Home = (props) => (
  <HomeStyle>
    <Carousel {...props} />
    <ProductList {...props} />
  </HomeStyle>
);

Home.prototypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
};

Home.defaultProps = {
  carouselImages: [],
  error: '',
};

export default Home;
