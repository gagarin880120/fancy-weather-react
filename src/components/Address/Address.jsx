import React from 'react';
import PropTypes from 'prop-types';
import styles from './Address.module.css';

export default function Address({ address, countryFlagURL }) {
  return (
    <div className={styles.wrapper}>
      <img src={countryFlagURL} alt="flag" className={styles.flag} />
      <h2 className={styles.address}>
        {address}
      </h2>
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
