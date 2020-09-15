import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import { CarouselStyle, Background } from './styles';

/*
  @TODO: actual error handling
*/

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

const Carousel = (props) => {
  const { carouselImages, error } = props;

  /* eslint-disable-next-line no-console */
  if (error) console.warn(error);

  const CarouselContent = carouselImages.map((url) => (
    <Background url={url} key={uuidv4()} />
  ));

  return (
    <CarouselStyle id="carousel">
      <Slider {...carouselSettings}>
        {CarouselContent}
      </Slider>
    </CarouselStyle>
  );
};

Carousel.propTypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.string),
  error: PropTypes.string,
};

Carousel.defaultProps = { carouselImages: [], error: '' };

export default Carousel;
