import { gql } from '@apollo/client';

const getProductByID = gql`
  query getProductByID($id: ID!) {
    product(id: $id){
      id,
      name,
      price,
      description,
      ref,
      promotions,
      images,
      type,
    }
  }
`;

export default getProductByID;
