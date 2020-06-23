import React from 'react';
import PropTypes from 'prop-types';
import * as Icons from '@intern0t/react-weather-icons';
import styles from './WeeklyWeatherCard.module.css';

export default function WeeklyWeatherCard({ weekday, temp, icon }) {
  const Icon = Icons[icon];
  return (
    <div className={styles.wrapper}>
      <span className={styles.weekday}>
        {weekday}
      </span>
      <div className={styles.temperature}>
        {temp}
      </div>
      <Icon color="#000" size={64} />
    </div>
  );
}

WeeklyWeatherCard.propTypes = {
  weekday: PropTypes.string,
  temp: PropTypes.number,
  icon: PropTypes.string,
};

WeeklyWeatherCard.defaultProps = {
  weekday: '',
  temp: 0,
  icon: '',
};
