import React from 'react';
import styles from './Info.module.css';
import Place from '../Place/Place';
import Date from '../Date/Date';
import CurrentWeather from '../CurrentWeather/CurrentWeather';

export default function Info() {
  return (
    <div className={styles.wrapper}>
      <Place />
      <Date />
      <CurrentWeather />
    </div>
  );
}
