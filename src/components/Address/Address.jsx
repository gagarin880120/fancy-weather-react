import React from 'react';
import PropTypes from 'prop-types';
import styles from './Address.module.css';

export default function Address({ address }) {
  return (
    <h2 className={styles.wrapper}>
      {address}
    </h2>
  );
}

Address.propTypes = {
  address: PropTypes.string,

};

Address.defaultProps = {
  address: '',
};
