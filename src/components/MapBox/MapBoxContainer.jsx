import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MapBox from './MapBox';
import { selectLatitude, selectLongitude, selectMapZoom } from '../../redux/selectors';
import { setMapZoom } from '../../redux/actions';

export function MapBoxContainer({
  lon, lat, mapZoom, onMapMove,
}) {
  return (
    <MapBox
      lon={lon}
      lat={lat}
      mapZoom={mapZoom}
      onMapMove={onMapMove}
    />
  );
}

export const mapStateToProps = (state) => ({
  lon: selectLongitude(state),
  lat: selectLatitude(state),
  mapZoom: selectMapZoom(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onMapMove(zoom) {
    dispatch(setMapZoom(zoom));
  },
});

MapBoxContainer.propTypes = {
  lon: PropTypes.number,
  lat: PropTypes.number,
  mapZoom: PropTypes.string,
  onMapMove: PropTypes.func,
};

MapBoxContainer.defaultProps = {
  lon: 0,
  lat: 0,
  mapZoom: '8',
  onMapMove: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MapBoxContainer);
