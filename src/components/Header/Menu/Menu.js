import React, { useContext } from 'react';
import MenuStyle from './styles';
import { ModalContext } from '../../../context';

const Menu = () => {
  const { openModal } = useContext(ModalContext);
  const onClickHandler = (modalName) => {
    openModal(modalName);
  };
  return (
    <MenuStyle id="menu">
      <button type="button" className="menuButton" onClick={() => onClickHandler('signup')}>SIGN UP</button>
      <button type="button" className="menuButton" onClick={() => onClickHandler('login')}>LOGIN</button>
      <div className="menuButton">PROMOTIONS</div>
      <div className="menuButton">ABOUT US</div>
    </MenuStyle>
  );
};

export default Menu;
