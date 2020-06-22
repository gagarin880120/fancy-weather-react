import React from 'react';
import styles from './NavBar.module.css';
import TemperatureScaleButton from '../TemperatureScaleButton/TemperatureScaleButton';
import LanguageSelectContainer from '../LanguageSelect';
import SearchField from '../SearchField/SearchField';

export default function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LanguageSelectContainer />
        <div className={styles.scaleButtons}>
          <TemperatureScaleButton
            scale="celsius"
          />
          <TemperatureScaleButton
            scale="fahrenheit"
          />
        </div>
      </div>
      <SearchField />
    </div>
  );
}
