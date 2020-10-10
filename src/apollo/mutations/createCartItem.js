import { gql } from '@apollo/client';

const createCartItem = gql`
  mutation createCartItem($input: createItemInput) {
    createItem(input: $input) {
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

export default createCartItem;
