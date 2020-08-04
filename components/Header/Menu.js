import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  display: flex;
  flex-direction: row-reverse;
  grid-column: 2;
  ${'' /* grid-row: 1; */}
`;

const MenuButton = styled.div`
  height: 100%;
  width: auto;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  letter-spacing: 3px;
  color: #202020;
  cursor: pointer;
`;

const StyledMenu = () => (
  <Menu>
    <MenuButton>SIGN UP</MenuButton>
    <MenuButton>LOGIN</MenuButton>
    <MenuButton>PROMOTIONS</MenuButton>
    <MenuButton>ABOUT US</MenuButton>
  </Menu>
);

export default StyledMenu;
