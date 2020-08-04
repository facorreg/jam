import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { v4 as uuidv4 } from 'uuid';
import { Carousel, Background } from './styles';

const fetchCarouselContent = async () => {
  try {
    const carouselContent = await fetch('https://picsum.photos/v2/list?limit=5')
      .then((response) => response.json())
      .then((data) => (
        data.map(({ download_url: url }) => <Background url={url} key={uuidv4()} />)
      ));

    return Promise.resolve(carouselContent);
  } catch (error) {
    return Promise.reject(error, 'Failed to get Carousel from the API');
  }
};

const CarouselWithStyle = () => {
  const [CarouselContent, setCarouselContent] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCarouselContent()
      .then((carouselContent) => setCarouselContent(carouselContent))
      .catch((err) => setError(err));
  }, []);

  /*
    @TODO: actual error handling
  */

  /* eslint-disable-next-line no-console */
  if (error) console.warn(error);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7500,
  };

  return (
    <Carousel>
      <Slider {...carouselSettings}>
        {CarouselContent}
      </Slider>
    </Carousel>
  );
};

export default CarouselWithStyle;
