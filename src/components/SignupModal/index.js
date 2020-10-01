/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { registerMutation } from '../../apollo/mutations';
import { useGeneratedInputRefs } from '../../ownHooks';

const promesify = (shouldResolve, msg) => {
  if (shouldResolve) return Promise.resolve();
  return Promise.reject(new Error(msg));
};

const refsSchema = [{
  name: 'username',
  validator: (str) => promesify(str.length > 6, 'Your username must be at lest 6 characters long'),
}, {
  name: 'password',
  validator: (str) => promesify(str.length > 8, 'Your password must be at least 8 characters long'),
}, {
  name: 'email',
  validator: (str) => promesify(Boolean(str.match(/^[a-z]{4,}@[a-z]{2,}.[a-z]{3,5}$/), 'Invalid email')),
}, {
  name: 'checkbox',
  type: 'checkbox',
  validator: (checkbox) => promesify(checkbox, 'You must accept the terms and conditions to register'),
}];

const SignupModal = () => {
  const { refs, validateAll, getAllInputs } = useGeneratedInputRefs(refsSchema, { noWhite: true });
  const [register] = useMutation(registerMutation);
  const [disabled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [timeoutHandler, setTimeoutHandler] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    (async () => {
      try {
        await validateAll();
        await register({ variables: { input: getAllInputs() } });
      } catch (err) {
        setDisabled(false);
        setErrorMessage(err.message || 'something went wrong');
        if (timeoutHandler) (clearTimeout(timeoutHandler));
        setTimeoutHandler(setTimeout(() => setErrorMessage(''), 5000));
      }
    })();
  };

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
      <input className="animated" type="submit" value="Register" onClick={handleSubmit} disabled={disabled} />
    </form>
  );
};

export default SignupModal;
