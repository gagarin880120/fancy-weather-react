import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentWeather.module.css';

export default function CurrentWeather({ currentWeather }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.temperature}>
        {currentWeather.temp_c}
      </div>
      <div>
        <img className={styles.icon} src={currentWeather.condition.icon} alt="" />
      </div>
      <div className={styles.summary}>
        {currentWeather.condition.text}
      </div>
      <div className={styles.humidity}>
        {`${currentWeather.humidity}%`}
      </div>
      <div className={styles.wind}>
        {`${currentWeather.wind_ms} m/s`}
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    temp_c: PropTypes.number,
    humidity: PropTypes.number,
    wind_ms: PropTypes.number,
    condition: PropTypes.shape({
      text: PropTypes.string,
      icon: PropTypes.string,
    }),
  }),
};

CurrentWeather.defaultProps = {
  currentWeather: {
    temp_c: 0,
    humidity: 0,
    wind_ms: 0,
    condition: {
      text: '',
      icon: '',
    },
  },
};
