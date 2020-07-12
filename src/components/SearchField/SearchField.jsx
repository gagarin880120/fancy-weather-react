import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchField.module.css';

export default function SearchField({ onSearch, currentDateInterval }) {
  const [query, setQuery] = useState('');
  return (
    <div className={styles.wrapper}>
      <input
        type="search"
        name="search"
        className={styles.searchInput}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            onSearch(query, currentDateInterval);
          }
        }}
      />
      <button
        type="button"
        onClick={() => onSearch(query, currentDateInterval)}
      >
        Search
      </button>
    </div>
  );
}

SearchField.propTypes = {
  onSearch: PropTypes.func,
  currentDateInterval: PropTypes.number,
}

SearchField.defaultProps = {
  onSearch: null,
  currentDateInterval: 0,
}
