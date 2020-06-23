import React from 'react';
import styles from './CurrentDate.module.css';
import PropTypes from 'prop-types';

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
