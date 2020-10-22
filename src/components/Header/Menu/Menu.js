import React, { useContext, Fragment } from 'react';
import { useRouter } from 'next/router';
import MenuStyle from './styles';
import { useAuth } from '../../../ownHooks';
import { ModalContext } from '../../../context';

const fakeButtonHandler = () => alert(`
- What is my purpose ?
- You're a fake button only there for display.
- ... oh my god...
- Yeah, welcome to the club pal.
`);

const Menu = () => {
  const {
    login, logout, isAuthenticated, loading,
  } = useAuth();
  const router = useRouter();
  const { openModal } = useContext(ModalContext);
  const onClickHandler = (modalName, props) => {
    openModal(modalName, props);
  };

  const modalCompProps = { login };
  const signupHandler = () => onClickHandler('signup', modalCompProps);
  const loginHandler = () => onClickHandler('login', modalCompProps);

  const buttonsSchema = [{
    elem: (
      <Fragment key="disconnectedMenu">
        <button type="button" className="menuButton" onClick={signupHandler}>SIGN UP</button>
        <button type="button" className="menuButton" onClick={loginHandler}>LOGIN</button>
      </Fragment>
    ),
    skip: isAuthenticated || loading,
  }, {
    elem: (
      <Fragment key="connectedMenu">
        <button type="button" className="menuButton" onClick={() => router.push('/tunnel/cart')}>
          <div className="menuBorder">
            <img src="/cart2.png" alt="cart" />
          </div>
        </button>
        <button type="button" className="menuButton" onClick={logout}>DISCONNECT</button>
      </Fragment>
    ),
    skip: !isAuthenticated || loading,
  }, {
    elem: (
      <Fragment key="commonMenu">
        <button type="button" className="menuButton" onClick={fakeButtonHandler}>PROMOTIONS</button>
        <button type="button" className="menuButton" onClick={fakeButtonHandler}>ABOUT US</button>
      </Fragment>
    ),
  }];

  return (
    <MenuStyle id="menu">
      {buttonsSchema.reduce((elems, { elem, skip }) => (skip ? elems : [...elems, elem]), [])}
    </MenuStyle>
  );
};

export default Menu;
