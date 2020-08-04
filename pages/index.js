import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';

const Home = styled.div`
  display: grid;
  grid-template-columns: 15px auto 15px;
`;

const StyledHome = () => (
  <Home>
    <SearchBar />
    <Carousel />
  </Home>
);

export default StyledHome;
