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
      </div>
      <Icon color="#000" size={256} />
      <div className={styles.summary}>
        {currentWeather.weather.description}
      </div>
      <div className={styles.humidity}>
        {`${currentWeather.rh}%`}
      </div>
      <div className={styles.wind}>
        {`${currentWeather.wind_spd} m/s`}
      </div>
    </div>
  );
}

CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    temp: PropTypes.number,
    rh: PropTypes.number,
    wind_spd: PropTypes.number,
    icon: PropTypes.string,
    weather: PropTypes.shape({
      description: PropTypes.string,
    }),
  }),
};

CurrentWeather.defaultProps = {
  currentWeather: {
    temp: 0,
    rh: 0,
    wind_spd: 0,
    icon: '',
    weather: {
      description: '',
    },
  },
};
