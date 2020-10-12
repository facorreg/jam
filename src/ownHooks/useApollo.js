import { useMemo } from 'react';
import { initializeApollo } from '../apollo';

const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

export default useApollo;
