import { useContext } from 'react';
import pick from 'lodash/pick';
import { useMutation } from '@apollo/client';
import { promesify } from '../utils';
import { registerMutation, loginMutation, createCartMutation } from '../apollo/mutations';
import { getUserById, getCachedCart } from '../apollo/queries';
import { ModalContext } from '../context';
import useApollo from './useApollo';

const createCartIfNotExist = async (client, createCart, id) => {
  /*
    @todo: find a way to link the cart to the user we get from Strapi
      currently, login returns UsersPermissionsMe
      whereas I'd like to get a UsersPermissionsUser

      Also, though this may be overkill for a "fake" website,
      I may want to have a lighter login / register handler.
  */
  const userData = await client.query({ query: getUserById, variables: { id }, options: { fetchPolicy: 'network-only' } });
  const cart = userData?.data?.user?.cart;
  // const cart = userData?.data?.user?.cart;

  if (cart) return Promise.resolve(cart);

  const cartData = await createCart({
    variables: {
      input: {
        data: { userId: id, user: id },
      },
    },
  });

  return cartData?.data?.createCart || {};
};

const cacheCartItems = (client, items, cartId) => {
  const toPick = [
    'id',
    'name',
    'ref',
    'price',
    'description',
    'subId',
  ];

  /*
    cartItems and total could have been retrieved in one
      single reduce, but it would have affected the code's readability
  */

  const data = {
    cartId,
    cartItems: items.map(({ id: itemId, quantity, product }) => ({
      itemId,
      quantity,
      subId: '',
      ...pick(product, toPick),
    })),
    total: items.reduce((total, { quantity, product }) => (
      total + product.price * quantity), 0),
  };

  client.writeQuery({
    query: getCachedCart,
    data,
  });

  return data;
};

const mutations = {
  register: registerMutation,
  login: loginMutation,
};

const useConnectionDataHandler = (login, field, errorMsg) => {
  const [mutation] = useMutation(mutations[field]);
  const [createCart] = useMutation(createCartMutation);
  const { closeModal } = useContext(ModalContext);
  const client = useApollo();

  const connectionDataHandler = async (args) => {
    try {
      const res = await mutation(args);
      const fieldData = res?.data[field] || {};
      const { user: { id } } = fieldData;
      const {
        items = [],
        id: cartId = {},
      } = await createCartIfNotExist(client, createCart, id);
      cacheCartItems(client, items, cartId);
      login(fieldData);
      closeModal();
      return res;
    } catch (err) {
      return promesify(false, errorMsg);
    }
  };

  return connectionDataHandler;
};

export default useConnectionDataHandler;
