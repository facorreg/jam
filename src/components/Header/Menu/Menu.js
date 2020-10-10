import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import MenuStyle from './styles';
import { useMe } from '../../../ownHooks';
import { ModalContext } from '../../../context';

const fakeButtonHandler = () => alert(`
- What is my purpose ?
- You're a fake button only there for display.
- ... oh my god...
- Yeah, welcome to the club pal.
`);

const Menu = () => {
  const { isConnected, connectMe, disconnectMe } = useMe();
  const router = useRouter();
  const { openModal } = useContext(ModalContext);
  const onClickHandler = (modalName, props) => {
    openModal(modalName, props);
  };

  const modalCompProps = { connectMe };
  const signup = () => onClickHandler('signup', modalCompProps);
  const login = () => onClickHandler('login', modalCompProps);

  return (
    <MenuStyle id="menu">
      {
        !isConnected
          ? (
            <>
              <button type="button" className="menuButton" onClick={signup}>SIGN UP</button>
              <button type="button" className="menuButton" onClick={login}>LOGIN</button>
            </>
          )
          : (
            <>
              <button type="button" className="menuButton" onClick={() => router.push('/cart')}>
                <div className="menuBorder">
                  <img src="/cart2.png" alt="cart" />
                </div>
              </button>
              <button type="button" className="menuButton" onClick={disconnectMe}>DISCONNECT</button>
            </>
          )
      }
      <button type="button" className="menuButton" onClick={fakeButtonHandler}>PROMOTIONS</button>
      <button type="button" className="menuButton" onClick={fakeButtonHandler}>ABOUT US</button>
    </MenuStyle>
  );
};

export default Menu;
