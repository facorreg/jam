import { useState } from 'react';
import useEventListener from './useEventListener';

const isBottomPage = () => {
  const scrollOffset = Math.trunc(window.innerHeight + document.documentElement.scrollTop);
  return scrollOffset === document.documentElement.offsetHeight;
};

const setLoadMoreProducts = ({
  nbProductsToDisplay,
  productsLength,
  productLimit,
  isLoadingMore,
  fetchMore,
  setNbProductsToDisplay,
  setIsLoadingMore,
}) => () => {
  if (!isBottomPage() || isLoadingMore) return;

  if (nbProductsToDisplay >= productsLength) {
    setIsLoadingMore(true);
    fetchMore({
      variables: {
        start: productsLength,
        limit: productLimit,
        fetchPolicy: 'server-only',
      },
    }).finally(() => setIsLoadingMore(false));
  }
  setNbProductsToDisplay(nbProductsToDisplay + productLimit);
};

const useScrollHandler = (options) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const scrollHandler = setLoadMoreProducts({ ...options, isLoadingMore, setIsLoadingMore });

  useEventListener('scroll', scrollHandler);

  return isLoadingMore;
};

export default useScrollHandler;
