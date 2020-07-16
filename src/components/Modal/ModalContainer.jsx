import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIsModalOpen, getDefaultAddress } from '../../redux/actions';
import { selectLanguage } from '../../redux/selectors';
import Modal from './Modal';

export function ModalContainer({ onClose, language }) {
  return (
    <Modal
      onClose={onClose}
      language={language}
    />
  );
}

export const mapStateToProps = (state) => ({
  language: selectLanguage(state),
})

export const mapDispatchToProps = (dispatch) => ({
  onClose() {
    dispatch(setIsModalOpen(false));
    dispatch(getDefaultAddress());
  },
});

ModalContainer.propTypes = {
  onClose: PropTypes.func,
  language: PropTypes.string,
};

ModalContainer.defaultProps = {
  onClose: null,
  language: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
