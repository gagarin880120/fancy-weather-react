import React from 'react';
import PropTypes from 'prop-types';
import styles from './TemperatureScaleButton.module.css';

export default function TemperatureScaleButton({ scale }) {
  return (
    <button type="button" className={styles.button}>
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
