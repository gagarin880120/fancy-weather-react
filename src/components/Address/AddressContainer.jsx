import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Address from './Address';
import { selectAddress, selectCountryFlagURL } from '../../redux/selectors';

export function AddressContainer({ address, countryFlagURL }) {
  return (
    <Address
      address={address}
      countryFlagURL={countryFlagURL}
    />
  );
}

export const mapStateToProps = (state) => ({
  address: selectAddress(state),
  countryFlagURL: selectCountryFlagURL(state),
});

AddressContainer.propTypes = {
  address: PropTypes.string,
  countryFlagURL: PropTypes.string,
};

AddressContainer.defaultProps = {
  address: '',
  countryFlagURL: '',
};

export default connect(mapStateToProps)(AddressContainer);
