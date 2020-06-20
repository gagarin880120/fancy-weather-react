import React from 'react';
import styles from './SearchField.module.css';

export default function SearchField() {
  return (
    <div className={styles.wrapper}>
      <input type="search" name="search" className={styles.searchInput} />
      <button type="button">Search</button>
    </div>
  );
}
