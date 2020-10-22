import React from 'react';
import { useRouter } from 'next/router';
import StyledCart from './styles';
import Steps from './Steps';
import { useCachedCart } from '../../../ownHooks';
import { roundToNthDeci } from '../../../utils';
import Product from '../../Product';

const Cart = () => {
  const { cart } = useCachedCart();
  const total = roundToNthDeci(cart.total, 2);
  const nbProducts = cart.cartItems.length;
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/tunnel/address');
  };

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
          <div className="title">MY ORDER</div>
          <div className="summaryMsg">
            <div>{`${nbProducts} products`}</div>
            <div>{`${total} €`}</div>
          </div>
          <div className="summaryMsg">
            <div>TOTAL</div>
            <div>{`${total} €`}</div>
          </div>
          {/* eslint-disable-next-line */}
          <div role="button" className="orderBtn" onClick={handleClick}>
            PROCEED TO PAYMENT
          </div>
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;
