import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapBox from './MapBox';
import { selectLatitude, selectLongitude } from '../../redux/selectors';

export function MapBoxContainer({ lon, lat }) {
  return (
    <MapBox
      lon={lon}
      lat={lat}
    />
  );
}

export const mapStateToProps = (state) => ({
  lon: selectLongitude(state),
  lat: selectLatitude(state),
});

MapBoxContainer.propTypes = {
  lon: PropTypes.number,
  lat: PropTypes.number,
};

MapBoxContainer.defaultProps = {
  lon: 0,
  lat: 0,
};

export default connect(mapStateToProps)(MapBoxContainer);
