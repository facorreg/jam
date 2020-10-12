/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useGeneratedInputRefs, useConnectionDataHandler } from '../../ownHooks';
import { promesify } from '../../utils';

const refsSchema = [{
  name: 'username',
  validator: (str) => promesify(str.length > 6, 'Your username must be at lest 6 characters long'),
}, {
  name: 'password',
  validator: (str) => promesify(str.length > 8, 'Your password must be at least 8 characters long'),
}, {
  name: 'email',
  validator: (str) => promesify(Boolean(str.match(/^[a-z0-9]|\.|-|_{4,}@[a-z]{2,}.[a-z]{3,5}$/), 'Invalid email')),
}, {
  name: 'checkbox',
  type: 'checkbox',
  notGQL: true,
  validator: (checkbox) => promesify(checkbox, 'You must accept the terms and conditions to register'),
}];

const SignupModal = ({ login }) => {
  const register = useConnectionDataHandler(login, 'register', 'Identifiers already taken');
  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, register, { noWhite: true });

  return (
    <form>
      <h2>REGISTER</h2>
      <div className={`modalError ${errorMessage ? '' : 'hidden'}`}>
        <div className="errorMessage">{errorMessage}</div>
      </div>
      <input name="username" placeholder="Username" type="text" ref={refs.username.ref} />
      <input name="email" placeholder="E-Mail Address" type="text" ref={refs.email.ref} />
      <input id="pw" name="password" placeholder="Password" type="password" ref={refs.password.ref} />
      <div className="agree">
        <input id="agree" name="agree" type="checkbox" ref={refs.checkbox.ref} />
        <label htmlFor="agree" />
        Accept terms and conditions
      </div>
      <input className="animated" type="submit" value="Register" onClick={handleSubmit} disabled={false} />
    </form>
  );
};

SignupModal.propTypes = {
  login: PropTypes.func.isRequired,
};

export default SignupModal;
