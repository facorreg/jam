import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../SearchBar';
import Carousel from '../../Carousel';
import HomeStyle from './styles';

const Home = (props) => (
  <HomeStyle>
    <SearchBar />
    <Carousel {...props} />
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
