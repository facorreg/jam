import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../ownHooks';
import { isServerSide } from '../../utils';

const Address = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated && !isServerSide()) router.push('/');
  }, [loading, isAuthenticated]);

  return null;
};

export default Address;
