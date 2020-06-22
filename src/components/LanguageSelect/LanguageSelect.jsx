import React from 'react';
import PropTypes from 'prop-types';
import styles from './LanguageSelect.module.css';

export default function LanguageSelect({ onLanguageChange }) {
  return (
    <select
      name="language"
      className={styles.select}
      onChange={(e) => onLanguageChange(e.target.value)}
    >
      <option value="en" defaultValue>en</option>
      <option value="ru">ru</option>
    </select>
  );
}

LanguageSelect.propTypes = {
  onLanguageChange: PropTypes.func,
};

LanguageSelect.defaultProps = {
  onLanguageChange: () => {},
};
