import React from 'react';
import StyledCart from './styles';
import Steps from './Steps';
import { useCachedCart } from '../../../ownHooks';
import { roundToNthDeci } from '../../../utils';
import Product from '../../Product';

const Cart = () => {
  const { cart } = useCachedCart();

  return (
    <StyledCart>
      <Steps currentStep="cart summary" />
      <div className="cartBody">
        <div className="cartItemContainer">
          {cart.cartItems.map((item) => (
            <Product product={item} key={item.id} page="ProductCart" />
          ))}
        </div>
        <div className="cartSummary">
          {`total = ${roundToNthDeci(cart.total, 2)}`}
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
