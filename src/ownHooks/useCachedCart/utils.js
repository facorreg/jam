import pick from 'lodash/pick';

const parseCartItemToCachedFormat = ({ id: itemId, product, quantity }) => {
  const toPick = [
    'id',
    'name',
    'ref',
    'price',
    'description',
    'subId',
    'images',
  ];

  const cartItem = {
    subId: '',
    itemId,
    quantity,
    ...pick(product, toPick),
  };

  return cartItem;
};

const buildCartToCachedFormat = ({ id, items = [] }) => ({
  cart: {
    id,
    ...items.reduce(({ cartItems = [], total = 0 }, item) => ({
      cartItems: [...cartItems, parseCartItemToCachedFormat(item)],
      total: total + item.product.price * item.quantity,
    }), { cartItems: [], total: 0 }),
  },
});

export { parseCartItemToCachedFormat, buildCartToCachedFormat };
