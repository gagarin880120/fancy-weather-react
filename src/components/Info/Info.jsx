import React from 'react';
import styles from './Info.module.css';
import AddressContainer from '../Address';
import CurrentDateContainer from '../CurrentDate';
import CurrentWeatherContainer from '../CurrentWeather';
import WeeklyWeather from '../WeeklyWeather/WeeklyWeather';

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <AddressContainer />
      <CurrentDateContainer />
      <CurrentWeatherContainer />
      <WeeklyWeather />
    </div>
  );
}
