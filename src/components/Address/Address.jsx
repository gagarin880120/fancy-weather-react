import React from 'react';
import PropTypes from 'prop-types';
import styles from './Address.module.css';

export default function Address({ address, countryFlagURL }) {
  console.log(countryFlagURL)
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.address}>
        {address}
      </h2>
      <img src={countryFlagURL} alt="flag" className={styles.flag} />
    </div>
  );
}

Address.propTypes = {
  address: PropTypes.string,
  countryFlagURL: PropTypes.string,

};

Address.defaultProps = {
  address: '',
  countryFlagURL: '',
};
