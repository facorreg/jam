/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const SignupModal = () => (
  <>
    <h2>REGISTER</h2>
    <input name="username" placeholder="Username" type="text" />
    <input id="pw" name="password" placeholder="Password" type="password" />
    <input name="email" placeholder="E-Mail Address" type="text" />
    <div className="agree">
      <input id="agree" name="agree" type="checkbox" placeholde="toto" />
      <label htmlFor="agree" />
      Accept terms and conditions
    </div>
    <input className="animated" type="submit" value="Register" />
  </>
);

export default SignupModal;
