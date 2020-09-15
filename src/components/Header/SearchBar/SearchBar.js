import React from 'react';
import SearchBarContainer from './styles';

const StyledSearchBar = () => (
  <SearchBarContainer id="searchBar">
    <div className="searchBar">
      <input className="searchBarInput" type="text" placeholder="search" />
      <button type="button" className="searchButton">
        <img src="/search.png" alt="magnifying glass" />
      </button>
    </div>
  </SearchBarContainer>
);

export default StyledSearchBar;
