import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default function Modal({ onClose, language }) {
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
      <span className={styles.message}>
        {
          language === 'en'
            ? 'The city you are looking for does not exist'
            : 'Город, который вы ищете, не существует'
        }
      </span>
    </button>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
  language: PropTypes.string,
};

Modal.defaultProps = {
  onClose: null,
  language: '',
};
