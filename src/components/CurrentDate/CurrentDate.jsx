import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentDate.module.css';

export default function CurrentDate({ currentDate }) {
  return (
    <div className={styles.wrapper}>
      {currentDate}
    </div>
  );
}

CurrentDate.propTypes = {
  currentDate: PropTypes.string,
};

CurrentDate.defaultProps = {
  currentDate: '',
};
