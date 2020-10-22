const updateItem = (mutation) => async ({ cart, index, quantity }) => {
  const cartItems = [...cart.cartItems];

  const updatedItemData = await mutation({
    variables: {
      input: {
        where: {
          id: cartItems[index].itemId,
        },
        data: {
          quantity,
        },
      },
    },
  });

  const updatedItem = updatedItemData?.data?.updateItem?.item || {};
  const toUpdate = { ...cartItems.splice(index, 1)[0], quantity: updatedItem.quantity };
  cartItems.splice(index, 0, toUpdate);

  return {
    cart: {
      ...cart,
      cartItems,
    },
    quantity: updatedItem.quantity,
  };
};

export default updateItem;
