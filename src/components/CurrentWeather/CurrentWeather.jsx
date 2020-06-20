import React from 'react';
import styles from './CurrentWeather.module.css';

export default function CurrentWeather() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.temperature}>
        20°
      </div>
      <div className={styles.humidity}>
        50%
      </div>
      <div className={styles.wind}>
        3 m/s
      </div>
    </div>
  );
}
