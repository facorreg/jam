import { gql } from '@apollo/client';

const getUser = gql`
  query getUser($id: ID!) {
    user(id:$id) {
      cart {
        id
        items {
          id
          type
          quantity
          product {
            id
            name
            ref
            price
            description
            images
            promotions
          }
        }
      }
    }
  }
`;

export default getUser;
