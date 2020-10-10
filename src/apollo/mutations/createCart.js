import { gql } from '@apollo/client';

const createCartMutation = gql`
  mutation createCart($input: createCartInput){
    createCart(input: $input) {
      cart {
        id
      }
    }
  }
`;

export default createCartMutation;
