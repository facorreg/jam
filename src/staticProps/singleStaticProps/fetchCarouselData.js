import { getEnv } from '../../utils';

const fetchCarouselImages = async () => {
  try {
    const carouselImages = await fetch(getEnv('CAROUSEL_API'))
      .then((response) => response.json())
      .then((data) => data.map(({ download_url: url }) => url));

    return Promise.resolve({ carouselImages });
  } catch (error) {
    return Promise.reject(error, 'Failed to get Carousel from the API');
  }
};

export default fetchCarouselImages;
