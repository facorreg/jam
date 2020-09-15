import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SearchBar from './SearchBar';
import HeaderStyle from './styles';

const Header = () => (
  <HeaderStyle id="header">
    <Logo />
    <Menu />
    <SearchBar />
  </HeaderStyle>
);

export default Header;
