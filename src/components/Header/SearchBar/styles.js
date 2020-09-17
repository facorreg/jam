import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .searchBar {
    display: flex;
    width: 30vw;
    position: relative;
  }

  .searchBarInput {
     width: 100%;
     padding: 10px 15px;
  }

  .searchButton {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    img {
      max-width: 75%;
      max-height: 75%;
    }
  }
`;

export default SearchBarContainer;
