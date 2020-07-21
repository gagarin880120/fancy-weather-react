import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemperatureScaleButton.module.css';

export default function TemperatureScaleButton({ scale, onScaleButtonClick, temperatureScale }) {
  return (
    <button
      type="button"
      className={styles.button}
      style={{ border: scale === temperatureScale ? '2px solid #fff' : '2px solid transparent' }}
      onClick={() => onScaleButtonClick(scale)}
    >
      {scale === 'celsius' ? 'C' : 'F'}
    </button>
  );
}

TemperatureScaleButton.propTypes = {
  scale: PropTypes.string,
  onScaleButtonClick: PropTypes.func,
  temperatureScale: PropTypes.string,
};

TemperatureScaleButton.defaultProps = {
  scale: '',
  onScaleButtonClick: null,
  temperatureScale: '',
};
