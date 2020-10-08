import { useContext } from 'react';
import get from 'lodash/get';
import { useMutation } from '@apollo/client';
import useMe from './useMe';
import { promesify } from '../utils';
import { registerMutation, loginMutation } from '../apollo/mutations';
import { ModalContext } from '../context';

const mutations = {
  register: registerMutation,
  login: loginMutation,
};

const useConnectionDataHandler = (field, errorMsg) => {
  const { connectMe } = useMe();
  const [mutation] = useMutation(mutations[field]);
  const { closeModal } = useContext(ModalContext);

  const connectionDataHandler = (args) => (
    mutation(args)
      .then((res) => {
        connectMe(get(res, `data.${field}`, ''));
        closeModal();
        return res;
      })
      .catch(() => promesify(false, errorMsg))
  );

  return connectionDataHandler;
};

export default useConnectionDataHandler;
