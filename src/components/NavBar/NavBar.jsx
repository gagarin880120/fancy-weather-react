import React from 'react';
import styles from './NavBar.module.css';
import TemperatureScaleButtonContainer from '../TemperatureScaleButton';
import LanguageSelectContainer from '../LanguageSelect';
import SearchFieldContainer from '../SearchField';

export default function NavBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <LanguageSelectContainer />
        <div className={styles.scaleButtons}>
          <TemperatureScaleButtonContainer
            scale="celsius"
          />
          <TemperatureScaleButtonContainer
            scale="fahrenheit"
          />
        </div>
      </div>
      <SearchFieldContainer />
    </div>
  );
}
