import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default function Modal({ onClose }) {
  const wrapper = useRef();
  useEffect(() => {
    wrapper.current.focus();
  }, [wrapper]);

  return (
    <button
      className={styles.wrapper}
      onClick={() => onClose()}
      type="button"
      ref={wrapper}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
    >
      <span className={styles.message}>City is not exist</span>
    </button>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  onClose: null,
};
