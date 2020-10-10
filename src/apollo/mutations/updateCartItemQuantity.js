import { gql } from '@apollo/client';

const updateCartItemQuantityMutation = gql`
  mutation updateQuantity($input: updateItemInput) {
    updateItem(input: $input) {
      item {
        product {
          id
          name
          price
          images
          description
          promotions
          ref
          type
        }
        id
        quantity
        subId
      }
    }
  }
`;

export default updateCartItemQuantityMutation;
