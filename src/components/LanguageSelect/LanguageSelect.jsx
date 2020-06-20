import React from 'react';
import styles from './LanguageSelect.module.css';

export default function LanguageSelect() {
  return (
    <select name="language" className={styles.select}>
      <option value="en" selected>en</option>
      <option value="ru">ru</option>
    </select>
  );
}
