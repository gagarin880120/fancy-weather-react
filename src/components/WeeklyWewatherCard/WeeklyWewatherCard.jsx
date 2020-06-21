import React from 'react';
import styles from './WeeklyWewatherCard.module.css';

export default function WeeklyWewatherCard() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.weekday}>Monday</span>
      <div className={styles.temperature}>24</div>
      <span className={styles.icon}>icon</span>
    </div>
  )
}
