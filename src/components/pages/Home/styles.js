import styled from 'styled-components';

const HomeStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 2;
  grid-area: main;

  #carousel {
    margin-bottom: 40px;
    grid-column: 1;
    grid-row: 1;
  }

  #productList {
    grid-column: 1;
    grid-row: 2;
  }
`;

export default HomeStyle;
