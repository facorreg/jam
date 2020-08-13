import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import HeaderStyle from './styles';

const Header = () => (
  <HeaderStyle>
    <Logo />
    <Menu />
  </HeaderStyle>
);

export default Header;
