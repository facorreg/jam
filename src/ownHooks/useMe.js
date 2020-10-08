import { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { me as meQuery } from '../apollo/queries';
import { getCookie, setCookie, removeCookie } from '../utils';

const useMe = () => {
  const userCookie = getCookie('user');
  const [me, setMe] = useState(userCookie || null);
  // const [me] = useQuery(meQuery);

  const connectMe = (user) => {
    setCookie('user', user);
    setMe(user);
  };

  const disconnectMe = () => {
    removeCookie('user');
    setMe(null);
  };

  return {
    me,
    connectMe,
    disconnectMe,
  };
};

export default useMe;
