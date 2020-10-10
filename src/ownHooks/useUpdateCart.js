import { useState } from 'react';
import { useMutation } from '@apollo/client';
import get from 'lodash/get';
import pick from 'lodash/pick';
import { useApollo } from '../apollo/apolloClient';
import { getCachedCart } from '../apollo/queries';
import { createCartItemMutation, updateCartItemQuantityMutation, deleteCartItemMutation } from '../apollo/mutations';

/*
  @todo:
    optimistic handling
*/

const useCachedCart = (state) => useState(state);

const useUpdateCartHandler = (isConnected, productId) => {
  const client = useApollo();
  const [createCartItem] = useMutation(createCartItemMutation);
  const [updateCartItemQuantity] = useMutation(updateCartItemQuantityMutation);
  const [deleteCartItem] = useMutation(deleteCartItemMutation);
  const [cachedCart, setCachedCart] = useCachedCart();
  const [quantity, setQuantity] = useState(0);
  // const [cachedCart, setCachedCart] = useState({ cart: {} });
  /* @todo: handle modal open if dc */
  if (!isConnected) return [0, () => { }];

  if (!cachedCart) {
    try {
      setCachedCart(client.readQuery({ query: getCachedCart }) || {});
    } catch (err) {
      return [0, () => { }];
    }
  }

  const updateItemQuantity = async (newQuantity) => {
    const { cart: { cartItems: rawCartItems = [], id: cartId } } = cachedCart;
    const cartItems = Object.assign([], rawCartItems);

    try {
      /* @todo: handle toPick as util */
      const toPick = [
        'id',
        'name',
        'ref',
        'price',
        'description',
        'subId',
      ];

      const getUpdatedItem = (res, queryName) => get(res, `data.${queryName}.item`, {});

      const isUpdate = Boolean(newQuantity);
      const index = productId
        ? cartItems.findIndex(({ id }) => id === productId)
        : -1;

      let updatedQuantity = 0;

      if (index === -1) {
        const createdItem = await createCartItem({
          variables: {
            input: {
              data: {
                quantity: newQuantity,
                product: productId,
                productId,
                cart: cartId,
              },
            },
          },
        });

        const { product, ...updatedItem } = getUpdatedItem(createdItem, 'createItem');
        updatedQuantity = updatedItem.quantity;
        const toUpdate = {
          subId: '',
          itemId: updatedItem.id,
          quantity: updatedQuantity,
          ...pick(product, toPick),
        };
        cartItems.push(toUpdate);
      } else if (isUpdate) {
        const updatedItem = await updateCartItemQuantity({
          variables: {
            input: {
              where: {
                id: cartItems[index].itemId,
              },
              data: {
                quantity: newQuantity,
              },
            },
          },
        });

        updatedQuantity = getUpdatedItem(updatedItem, 'updateItem').quantity;
        const toUpdate = { ...cartItems.splice(index, 1)[0], quantity: updatedQuantity };
        cartItems.splice(index, 0, toUpdate);
      } else {
        await deleteCartItem({
          variables: {
            input: {
              where: { id: cartItems[index].itemId },
            },
          },
        });

        cartItems.splice(index, 1);
      }

      const newCachedCart = {
        cartId,
        cartItems,
        total: cartItems.reduce((total, { quantity: q, price }) => (
          total + price * q), 0),
      };

      client.writeQuery({
        query: getCachedCart,
        data: newCachedCart,
      });

      setCachedCart({ cart: newCachedCart });
      setQuantity(updatedQuantity);

      return updatedQuantity;
    } catch (err) {
      console.log(err);
      return 0;
    }
  };

  if (!cachedCart) return [0, updateItemQuantity];
  const cartItems = Object.assign([], cachedCart.cart.cartItems);
  const {
    quantity: itemQuantity = 0,
  } = cartItems.find(({ id: pId }) => productId === pId) || {};

  return [itemQuantity, updateItemQuantity];
};

export default useUpdateCartHandler;
