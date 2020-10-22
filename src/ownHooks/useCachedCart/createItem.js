import { parseCartItemToCachedFormat } from './utils';

const createItem = (mutation) => async ({ cart, productId, quantity }) => {
  const { cartItems: oldCartItems, id: cartId } = cart;
  const cartItems = [...oldCartItems];

  const createdItemData = await mutation({
    variables: {
      input: {
        data: {
          quantity,
          product: productId,
          productId,
          cart: cartId,
        },
      },
    },
  });

  const { product, ...newItem } = createdItemData?.data?.createItem?.item || {};
  const toAdd = parseCartItemToCachedFormat({
    id: newItem.id, product, quantity: newItem.quantity,
  });

  cartItems.push(toAdd);
  return {
    cart: {
      ...cart,
      cartItems,
    },
    quantity: newItem.quantity,
  };
};

export default createItem;
