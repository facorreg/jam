import { useState } from 'react';
import pick from 'lodash/pick';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { me as meQuery, getUserById, getCachedCart } from '../apollo/queries';
import { setCookie, removeCookie } from '../utils';
import { useApollo } from '../apollo/apolloClient';

const useMe = () => {
  const { data = {}, laoding, error } = useQuery(meQuery);
  const [
    getUser, { loading: uLoading, error: uError, data: uData },
  ] = useLazyQuery(getUserById);
  const [me, setMe] = useState(null);
  const client = useApollo();
  const { me: newMe = null } = data;

  if (!laoding && !error && newMe !== me) {
    setMe(newMe);
    if (newMe && newMe.id) {
      getUser({ variables: { id: newMe.id }, options: { fetchPolicy: 'network-only' } });
    }
  }

  let cartData;

  if (!uLoading && !uError && uData) {
    const toPick = [
      'id',
      'name',
      'ref',
      'price',
      'description',
      'subId',
    ];

    const { user: { cart: { items, id } } } = uData;
    const cartItems = items.map(({ id: itemId, product, quantity }) => ({
      subId: '',
      itemId,
      quantity,
      ...pick(product, toPick),
    }));

    cartData = {
      cart: {
        id,
        cartItems,
        total: items.reduce((acc, { product, quantity }) => acc + product.price * quantity, 0),
      },
    };

    client.writeQuery({
      query: getCachedCart,
      data: cartData,
    });
  }

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
    isConnected: me !== null,
    cart: uLoading || uError ? null : cartData,
    cartLoading: uLoading,
    cartError: uError,
    connectMe,
    disconnectMe,
  };
};

export default useMe;
