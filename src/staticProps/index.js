import isArray from 'lodash/isArray';
import { fetchCarouselData } from './singleStaticProps';

const paths = [{
  path: ['/', '/home'],
  staticPropsArray: [fetchCarouselData],
}];

/*
  Errors are caught but their errors are extrated so they can then be
  handled by the components
*/

const resolve = (data) => Promise.resolve({
  props: data instanceof Error
    ? { error: data.reason || data.message }
    : data,
});

const buildStaticProps = async (staticPropsArray) => {
  try {
    const staticPropsPromises = await Promise.all(staticPropsArray.map((ft) => ft()));
    const staticProps = staticPropsPromises
      .reduce((allProps, currentProps) => ({ ...allProps, ...currentProps }), {});

    return resolve(staticProps);
  } catch (error) {
    return resolve(error);
  }
};

const getStaticPropsArrayGetter = (pathname) => ({ path }) => (
  isArray(path) ? path.includes(pathname) : path === pathname
);

const getStaticPropsUniversal = (pathname) => async () => {
  const getStaticPropsArray = getStaticPropsArrayGetter(pathname);
  const { staticPropsArray } = paths.find(getStaticPropsArray) || {};

  if (!staticPropsArray || !staticPropsArray.length) return Promise.resolve({});

  return buildStaticProps(staticPropsArray);
};

export default getStaticPropsUniversal;
