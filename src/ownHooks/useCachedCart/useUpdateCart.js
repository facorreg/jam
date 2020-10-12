import { useMutation } from '@apollo/client';
import useApollo from '../useApollo';
import { getCachedCart } from '../../apollo/queries';
import {
  createCartItemMutation,
  updateCartItemQuantityMutation,
  deleteCartItemMutation,
} from '../../apollo/mutations';

import createItem from './createItem';
import updateItem from './updateItem';
import deleteItem from './deleteItem';

const useUpdateCart = (cart) => {
  const [create] = useMutation(createCartItemMutation);
  const [update] = useMutation(updateCartItemQuantityMutation);
  const [del] = useMutation(deleteCartItemMutation);
  const client = useApollo();

  const handlers = [{
    handler: createItem(create),
    shouldUse: ({ index }) => Boolean(index === -1),
  }, {
    handler: deleteItem(del),
    shouldUse: ({ quantity }) => !quantity,
  }, {
    handler: updateItem(update),
    isDefaultHandler: true,
  }];

  const getValidHandler = (args) => ({ shouldUse, isDefaultHandler }) => (
    (shouldUse && shouldUse(args)) || isDefaultHandler
  );

  const updateCart = async (args) => {
    const { quantity, index } = args;
    const { handler } = handlers.find(getValidHandler({ quantity, index }));

    const { cart: newCart, quantity: newQuantity } = await handler({ ...args, cart, index });
    newCart.total = newCart.cartItems.reduce((total, { quantity: q, price }) => (
      total + price * q), 0);

    client.writeQuery({ query: getCachedCart, data: newCart });

    return { newQuantity, newCart };
  };

  return updateCart;
};

export default useUpdateCart;
