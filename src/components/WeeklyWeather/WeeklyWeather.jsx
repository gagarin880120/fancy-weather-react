import React from 'react';
import styles from './WeeklyWeather.module.css';
import WeeklyWewatherCard from '../WeeklyWewatherCard/WeeklyWewatherCard';

export default function WeeklyWeather() {
  return (
    <div className={styles.wrapper}>
      {/* получая из хранилища информацию рендерить массив из карточек */}
      <WeeklyWewatherCard />
    </div>
  );
}
