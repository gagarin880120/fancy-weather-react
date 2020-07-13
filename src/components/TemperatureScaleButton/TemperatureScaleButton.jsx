import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemperatureScaleButton.module.css';

export default function TemperatureScaleButton({ scale, onScaleButtonClick }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => onScaleButtonClick(scale)}
    >
      {scale === 'celsius' ? 'C' : 'F'}
    </button>
  );
}

TemperatureScaleButton.propTypes = {
  scale: PropTypes.string,
};

TemperatureScaleButton.defaultProps = {
  scale: '',
};
