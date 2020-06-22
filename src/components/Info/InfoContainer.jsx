import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Info from './Info';
import { getDefaultAddress } from '../../redux/actions';

export function InfoContainer({ getAddressByIP }) {
  useEffect(() => {
    getAddressByIP();
  }, []);

  return (
    <Info />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  getAddressByIP() {
    dispatch(getDefaultAddress());
  },
});

InfoContainer.propTypes = {
  getAddressByIP: PropTypes.func,
};

InfoContainer.defaultProps = {
  getAddressByIP: () => {},
};

export default connect(null, mapDispatchToProps)(InfoContainer);
