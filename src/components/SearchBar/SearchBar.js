import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  grid-column: 2;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = styled.div`
  display: flex;
  width: 30vw;
  margin: 10px 0;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
`;

const SearchButton = styled.button`
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
  z-index: 2;
  outline: none;

  & img {
    max-width: 75%;
    max-height: 75%;
  }
`;

const StyledSearchBar = () => (
  <SearchBarContainer>
    <SearchBar>
      <SearchInput type="text" placeholder="search" />
      <SearchButton>
        <img src="/search.png" alt="magnifying glass" />
      </SearchButton>
    </SearchBar>
  </SearchBarContainer>
);

export default StyledSearchBar;
