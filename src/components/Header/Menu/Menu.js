import React, { useContext } from 'react';
import MenuStyle from './styles';
import { ModalContext } from '../../Modal';

const Menu = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <MenuStyle id="menu">
      <button type="button" className="menuButton" onClick={() => openModal('signup')}>SIGN UP</button>
      <button type="button" className="menuButton" onClick={() => openModal('login')}>LOGIN</button>
      <div className="menuButton">PROMOTIONS</div>
      <div className="menuButton">ABOUT US</div>
    </MenuStyle>
  );
};

export default Menu;
