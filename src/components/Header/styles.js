import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: grid;
  width: auto;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 75px auto;
  grid-area: header;

  #logo {
    grid-row: 1;
    grid-column: 1;
  }

  #menu {
    grid-column: 2;
  }

  #searchBar {
    grid-row: 2;
    grid-column: 1 / span 2;
    margin: auto;
  }
`;

export default HeaderStyle;
