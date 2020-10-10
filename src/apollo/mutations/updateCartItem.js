import { gql } from '@apollo/client';

const updateCartItem = gql`
  mutation updateCartItem($input: updateItemInput) {
    updateItem(input: $input)
  }
`;

export default updateCartItem;
