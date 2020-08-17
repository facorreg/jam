import isArray from 'lodash/isArray';
import { fetchCarouselData, fetchProductsData } from './singleStaticProps';

// staticPropsArray: [ft() => Promise]

const paths = [{
  path: ['/'],
  staticPropsArray: [fetchCarouselData, fetchProductsData],
  options: { revalidate: 1 },
}];

/*
  Errors are caught but their errors are extrated so they can then be
  handled by the components
*/

const resolve = (data, options = {}) => Promise.resolve({
  props: data instanceof Error
    ? { error: data.reason || data.message }
    : data,
  ...options,
});

const buildStaticProps = async (staticPropsArray, options) => {
  try {
    const staticPropsPromises = await Promise.all(staticPropsArray.map((ft) => ft()));
    const staticProps = staticPropsPromises
      .reduce((allProps, currentProps) => ({ ...allProps, ...currentProps }), {});

    return resolve(staticProps, options);
  } catch (error) {
    return resolve(error, options);
  }
};

const getStaticPropsArrayGetter = (pathname) => ({ path }) => (
  isArray(path) ? path.includes(pathname) : path === pathname
);

const getStaticPropsUniversal = (pathname) => async () => {
  const getStaticPropsArray = getStaticPropsArrayGetter(pathname);
  const { staticPropsArray, options } = paths.find(getStaticPropsArray) || {};

  if (!staticPropsArray || !staticPropsArray.length) return Promise.resolve({});

  return buildStaticProps(staticPropsArray, options);
};

export default getStaticPropsUniversal;
