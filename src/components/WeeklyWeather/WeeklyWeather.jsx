import React from 'react';
import PropTypes from 'prop-types';
import styles from './WeeklyWeather.module.css';
import WeeklyWeatherCard from '../WeeklyWeatherCard/WeeklyWeatherCard';

export default function WeeklyWeather({ weeklyWeather }) {
  return (
    <div className={styles.wrapper}>
      {
      weeklyWeather.map((v) => (
        <WeeklyWeatherCard
          key={v.datetime}
          temp={v.temp}
          weekday={v.weekday}
          icon={v.icon}
        />
      ))
      }
    </div>
  );
}

WeeklyWeather.propTypes = {
  weeklyWeather: PropTypes.instanceOf(Array),
};

WeeklyWeather.defaultProps = {
  weeklyWeather: [],
};
