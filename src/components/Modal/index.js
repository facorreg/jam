import React, { useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import StyledModalComp from './style';
// eslint-disable-next-line import/no-cycle
import ModalContext from '../../context';
import LoginModal from '../LoginModal';
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

const ModalComp = ({ children }) => {
  useEffect(() => (
    Modal.setAppElement('body')
  ));

  const [isOpen, setIsOpen] = React.useState(false);
  const [modalName, setModalName] = React.useState('');

  const openModal = (newModalName) => {
    setModalName(newModalName);
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <StyledModalComp>
          <div className="modalForm">
            {
              modalName === 'signup'
                ? <SignupModal />
                : <LoginModal />
            }
          </div>
        </StyledModalComp>
      </Modal>
      <ModalContext.Provider value={{
        afterOpenModal, closeModal, isOpen, modalName, openModal,
      }}
      >
        {children}
      </ModalContext.Provider>
    </div>
  );
};

ModalComp.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ModalComp;
