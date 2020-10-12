import { useState } from 'react';
import useAuth from '../useAuth';
import useApollo from '../useApollo';
import { getCachedCart } from '../../apollo/queries';
import useUpdateCart from './useUpdateCart';

const useCachedCart = () => {
  const client = useApollo();
  const { loading, isAuthenticated } = useAuth();
  const [hasBeenSet, setHasBeenSet] = useState(false);
  const [cart, setCart] = useState({ cartItems: [] });
  const updateCart = useUpdateCart(cart);

  const findInCart = (productId) => ({ id: itemProductId }) => itemProductId === productId;

  if (!hasBeenSet && !loading && isAuthenticated) {
    try {
      setCart(client.readQuery({ query: getCachedCart }).cart);
    } catch (err) {
      /* handle error */
    }
    setHasBeenSet(true);
  }

  const updateItemQuantity = async (quantity, productId) => {
    if (!hasBeenSet) return 0;

    const index = cart.cartItems.findIndex(findInCart(productId));
    const { newCart, newQuantity } = await updateCart({ quantity, productId, index });
    setCart(newCart);

    return newQuantity;
  };

  const getItemQuantity = (productId) => ((
    cart.cartItems.find(findInCart(productId)) || {}).quantity || 0
  );

  return {
    cart, loading, updateItemQuantity, getItemQuantity,
  };
};

export default useCachedCart;
