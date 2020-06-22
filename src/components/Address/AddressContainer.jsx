import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Address from './Address';
import { selectAddress } from '../../redux/selectors';

export function AddressContainer({ address }) {
  return (
    <Address
      address={address}
    />
  );
}

export const mapStateToProps = (state) => ({
  address: selectAddress(state),
});

AddressContainer.propTypes = {
  address: PropTypes.string,

};

AddressContainer.defaultProps = {
  address: '',
};

export default connect(mapStateToProps)(AddressContainer);
