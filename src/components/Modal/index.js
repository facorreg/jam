import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import LoginModal from '../LoginModal';
import StyledModalComp from './style';
// eslint-disable-next-line import/no-cycle
import SignupModal from '../SignupModal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalContext = createContext();
const { Provider } = ModalContext;

const ModalComp = ({ children }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [Form, setForm] = React.useState(null);
  useEffect(() => (
    Modal.setAppElement('body')
  ));

  const modalSchema = {
    login: LoginModal,
    signup: SignupModal,
  };

  const openModal = (type) => {
    setIsOpen(true);
    setForm(modalSchema[type]);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const providerData = {
    openModal,
    closeModal,
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledModalComp>
          <div className="modalForm">
            {Form}
          </div>
        </StyledModalComp>
      </Modal>
      <Provider value={providerData}>
        {children}
      </Provider>
    </div>
  );
};

ModalComp.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalComp;
