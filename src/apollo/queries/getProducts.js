import { gql } from '@apollo/client';

const getProductsQuery = gql`
  query getProducts($sort: String, $limit: Int, $start: Int, $where: JSON) {
    products(sort: $sort, limit: $limit, start: $start, where: $where){
      id,
      name,
      price,
      description,
      ref,
      promotions,
      images,
      type,
    }
  }`;

export default getProductsQuery;
