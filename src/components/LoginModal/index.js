/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useGeneratedInputRefs, useConnectionDataHandler } from '../../ownHooks';
import { promesify } from '../../utils';

const refsSchema = [{
  name: 'identifier',
  validator: (str) => promesify(str.length, 'Please enter either your e-mail or username to login'),
}, {
  name: 'password',
  validator: (str) => promesify(str.length, 'Please provide your password to login'),
}];

const LoginModal = () => {
  const login = useConnectionDataHandler('login', 'Identifiers or password incorrect');
  const {
    refs, handleSubmit, errorMessage, disabled,
  } = useGeneratedInputRefs(refsSchema, login, { noWhite: true });

  return (
    <form>
      <h2>SIGN IN</h2>
      <div className={`modalError ${errorMessage ? '' : 'hidden'}`}>
        <div className="errorMessage">{errorMessage}</div>
      </div>
      <input name="identifier" placeholder="Username or E-mail" type="text" ref={refs.identifier.ref} />
      <input id="pw" name="password" placeholder="Password" type="password" ref={refs.password.ref} />
      <input className="animated" type="submit" value="Register" onClick={handleSubmit} disabled={disabled} />
    </form>
  );
};

export default LoginModal;
