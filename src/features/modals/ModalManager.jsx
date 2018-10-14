import React from 'react';
import { connect } from 'react-redux';
import TestModal from './TestModal';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import UnauthModal from './UnauthModal';

const modalLookup = {
  TestModal,
  LoginModal,
  RegisterModal,
  UnauthModal
};

const mapState = (state) => ({
  currentModel: state.modals
});

const ModalManager = ({currentModel}) => {
  let renderedModal;

  if (currentModel) {
    const {modalType, modalProps} = currentModel;
    const ModalComponent = modalLookup[modalType];

    renderedModal = <ModalComponent {...modalProps} />
  }
  return <span>{renderedModal}</span>
}

export default connect(mapState)(ModalManager)
