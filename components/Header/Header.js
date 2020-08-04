import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';

const Header = styled.div`
  display: grid;
  width: auto;
  grid-auto-columns: 1fr 2fr;
`;

const HeaderWithStyle = () => (
  <Header>
    <Logo />
    <Menu />
  </Header>
);

export default HeaderWithStyle;
