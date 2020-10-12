const deleteItem = (mutation) => async ({ cart, index }) => {
  const cartItems = [...cart.cartItems];
  await mutation({
    variables: {
      input: {
        where: { id: cartItems[index].itemId },
      },
    },
  });

  cartItems.splice(index, 1);

  return {
    cart: {
      ...cart,
      cartItems,
    },
    quantity: 0,
  };
};

export default deleteItem;
