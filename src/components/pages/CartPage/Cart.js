import React from 'react';
import StyledCart from './styles';
import Steps from './Steps';
import AddButton from '../../AddButton';

const fakeData = [{
  productId: '1',
  // tags: [Tag]
  // campaigns: [Campaign]
  // tips: String
  type: 'grocery',
  product: {
    id: '1',
    name: 'name',
    price: 12,
    ref: 'whatever a ref is',
    description: 'descr',
    images: [{
      id: '1',
      thumbnail: 'https://picsum.photos/200/200',
      large: 'https://picsum.photos/200/200',
      medium: 'https://picsum.photos/200/200',
      small: 'https://picsum.photos/200/200',
      original: 'https://picsum.photos/200/200',
    }],
  },
  quantity: 2,
}, {
  productId: '1',
  price: 12,
  ref: 'whatever a ref is',
  description: 'descr',
  // tags: [Tag]
  // campaigns: [Campaign]
  // tips: String
  type: 'grocery',
  product: {
    id: '1',
    images: [{
      id: '1',
      thumbnail: 'thumbnail',
      large: 'https://picsum.photos/200/300',
      medium: 'https://picsum.photos/200/300',
      small: 'https://picsum.photos/200/300',
      original: 'https://picsum.photos/200/300',
    }],
  },
  quantity: 2,
}, {
  productId: '1',
  price: 12,
  ref: 'whatever a ref is',
  description: 'descr',
  // tags: [Tag]
  // campaigns: [Campaign]
  // tips: String
  type: 'grocery',
  product: {
    id: '1',
    images: [{
      id: '1',
      thumbnail: 'thumbnail',
      large: 'https://picsum.photos/200/300',
      medium: 'https://picsum.photos/200/300',
      small: 'https://picsum.photos/200/300',
      original: 'https://picsum.photos/200/300',
    }],
  },
  quantity: 2,
}, {
  productId: '1',
  price: 12,
  ref: 'whatever a ref is',
  description: 'descr',
  // tags: [Tag]
  // campaigns: [Campaign]
  // tips: String
  type: 'grocery',
  product: {
    id: '1',
    images: [{
      id: '1',
      thumbnail: 'thumbnail',
      large: 'https://picsum.photos/200/300',
      medium: 'https://picsum.photos/200/300',
      small: 'https://picsum.photos/200/300',
      original: 'https://picsum.photos/200/300',
    }],
  },
  quantity: 2,
}];

const Cart = () => {
  const { product, quantity } = fakeData[0];

  return (
    <StyledCart>
      <Steps currentStep="cart summary" />
      <div className="cartBody">
        <div className="cartItemContainer">
          <div className="cartItem">
            <div className="thumbnail">
              <img src={product.images[0].thumbnail} alt="cartItem" />
            </div>
            <div className="ref">{product.ref}</div>
            <div className="price">{`${product.price}€`}</div>
            <div className="name">{product.name}</div>
            <AddButton cName="addButtonContainer" quantity={quantity} productId="12" />
          </div>
        </div>
        <div className="cartSummary" />
      </div>
    </StyledCart>
  );
};

export default Cart;
