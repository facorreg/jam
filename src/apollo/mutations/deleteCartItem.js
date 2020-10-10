import { gql } from '@apollo/client';

const deleteCartItemMutation = gql`
  mutation deleteCartItem($input: deleteItemInput) {
    deleteItem(input: $input) {
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

export default deleteCartItemMutation;
