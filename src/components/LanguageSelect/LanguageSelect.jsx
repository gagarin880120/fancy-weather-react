import React from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageSelect.module.css';

export default function LanguageSelect({ onLanguageChange, query }) {
  return (
    <select
      name="language"
      className={styles.select}
      onChange={(e) => onLanguageChange(e.target.value, query)}
    >
      <option value="en">en</option>
      <option value="ru">ru</option>
    </select>
  );
}

LanguageSelect.propTypes = {
  onLanguageChange: PropTypes.func,
  query: PropTypes.string,
};

LanguageSelect.defaultProps = {
  onLanguageChange: () => {},
  query: '',
};
