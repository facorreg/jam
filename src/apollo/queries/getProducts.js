import { gql } from '@apollo/client';

const getProductsQuery = gql`
  query getProducts($sort: String, $limit: Int, $start: Int, $where: JSON) {
    products(sort: $sort, limit: $limit, start: $start, where: $where){
      id
      product_id
      product_name
      price
      product_img_url
      product_brand
      description
      promotions
      product_type
    }
  }`;

export default getProductsQuery;
