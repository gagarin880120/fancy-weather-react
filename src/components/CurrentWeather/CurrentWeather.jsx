import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@intern0t/react-weather-icons';
import styles from './CurrentWeather.module.css';

export default function CurrentWeather({ currentWeather }) {
  const Icon = Icons[currentWeather.icon];
  return (
    <div className={styles.wrapper}>
      <div className={styles.temperature}>
        {currentWeather.temp}
        <Icon color="#fff" size={200} />
      </div>
      <div className={styles.summary}>
        {currentWeather.weather.description}
      </div>
      <div className={styles.humidity}>
        {currentWeather.rh}
      </div>
      <div className={styles.wind}>
        {currentWeather.wind_spd}
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    temp: PropTypes.number,
    rh: PropTypes.string,
    wind_spd: PropTypes.string,
    icon: PropTypes.string,
    weather: PropTypes.shape({
      description: PropTypes.string,
    }),
  }),
};

CurrentWeather.defaultProps = {
  currentWeather: {
    temp: 0,
    rh: '',
    wind_spd: '',
    icon: '',
    weather: {
      description: '',
    },
  },
};
