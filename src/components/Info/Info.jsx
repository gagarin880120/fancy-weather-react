import React from 'react';
import styles from './Info.module.css';
import AddressContainer from '../Address';
import CurrentDateContainer from '../CurrentDate';
import CurrentWeatherContainer from '../CurrentWeather';
import WeeklyWeatherContainer from '../WeeklyWeather';
import MapBoxContainer from '../MapBox';

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.currentInfoMapContainer}>
        <div className={styles.currentInfoContainer}>
          <AddressContainer />
          <CurrentDateContainer />
          <CurrentWeatherContainer />
        </div>
        <MapBoxContainer />
      </div>
      <WeeklyWeatherContainer />
    </div>
  );
}
