import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIsModalOpen, getDefaultAddress } from '../../redux/actions';
import Modal from './Modal';

export function ModalContainer({ onClose }) {
  return (
    <Modal onClose={onClose} />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onClose() {
    dispatch(setIsModalOpen(false));
    dispatch(getDefaultAddress());
  },
});

ModalContainer.propTypes = {
  onClose: PropTypes.func,
};

ModalContainer.defaultProps = {
  onClose: null,
};

export default connect(null, mapDispatchToProps)(ModalContainer);
