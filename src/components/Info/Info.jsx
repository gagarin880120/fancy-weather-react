import React from 'react';
import styles from './Info.module.css';
import AddressContainer from '../Address';
import Date from '../Date/Date';
import CurrentWeatherContainer from '../CurrentWeather';
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather';

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <AddressContainer />
      <Date />
      <CurrentWeatherContainer />
      <WeeklyWeather />
    </div>
  );
}
