import { gql } from '@apollo/client';

const getCachedCart = gql`
  query cart {
    cart {
      id
      cartItems {
        id
        itemId
        name
        ref
        price
        description
        quantity
        subId
      },
      total
    }
  }
`;

export default getCachedCart;
