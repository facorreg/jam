import { gql } from '@apollo/client';

const getProductByID = gql`
  query getProductByID($id: ID!) {
    product(id: $id){
      product_name
      price
      product_img_url
      product_brand
      description
      promotions
      product_type
    }
  }
`;

export default getProductByID;
