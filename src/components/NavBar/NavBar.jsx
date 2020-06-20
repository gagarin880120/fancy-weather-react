import React from 'react';
import styles from './NavBar.module.css';
import TemperatureScaleButton from '../TemperatureScaleButton/TemperatureScaleButton';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import SearchField from '../SearchField/SearchField';

export default function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <TemperatureScaleButton
          scale="celsius"
        />
        <TemperatureScaleButton
          scale="fahrenheit"
        />
        <LanguageSelect />
      </div>
      <SearchField />
    </div>
  );
}
