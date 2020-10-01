/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const LoginModal = () => (
  <form>
    <h2>SIGN IN</h2>
    <input name="username" placeholder="Username" type="text" />
    <input id="pw" name="password" placeholder="Password" type="password" />
    <input className="animated" type="submit" value="Register" onClick={() => { }} />
  </form>
);

export default LoginModal;
