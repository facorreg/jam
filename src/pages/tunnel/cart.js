import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../ownHooks';
import { isServerSide } from '../../utils';
import Cart from '../../components/pages/CartPage';

const CartPage = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated && !isServerSide()) router.push('/');
  }, [loading, isAuthenticated]);
  return isAuthenticated ? <Cart /> : null;
};

export default CartPage;
