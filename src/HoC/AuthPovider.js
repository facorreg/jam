import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCookie, setCookie, removeCookie } from '../utils';
import { me as meQuery, getUserById, getCachedCart } from '../apollo/queries';
import { AuthContext } from '../context';
import { useApollo } from '../ownHooks';
import { buildCartToCachedFormat } from '../ownHooks/useCachedCart/utils';
// const useQueryToPromise = (query) =>

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const client = useApollo();

  // const useMePromise = useMe();

  useEffect(() => {
    const getUser = async () => {
      const token = getCookie('user');
      if (token) {
        const { data: { me } } = await client.query({ query: meQuery });
        const { data: { user: { cart = {} } } } = await client.query({ query: getUserById, variables: { id: me.id }, options: { fetchPolicy: 'network-only' } });
        const cachedCart = buildCartToCachedFormat(cart);
        client.writeQuery({
          query: getCachedCart,
          data: cachedCart,
        });
        setUser(me);
      }
      setLoading(false);
    };
    getUser();
  }, [user]);

  const login = (usr) => {
    setCookie('user', usr);
    setUser(usr);
  };

  const logout = () => {
    removeCookie('user');
    client.resetStore();
    setUser(null);
  };

  const providerValue = {
    isAuthenticated: Boolean(user),
    loading,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
