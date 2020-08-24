import styled from 'styled-components';

const ProductListStyle = styled.div`
  display: grid;
  grid-template-columns: 5% 90% 5%;
  width: calc(100vw - 80px);
  padding: 40px 0px;

  & .productListContainer {
    min-height: auto;
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export default ProductListStyle;
