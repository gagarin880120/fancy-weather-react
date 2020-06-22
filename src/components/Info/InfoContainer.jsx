import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Info from './Info';
import { selectPlace, selectCurrentWeather } from '../../redux/selectors';
import { getDefaultPlace } from '../../redux/actions';

export function InfoContainer({ place, currentWeather, getPlaceByIP }) {
  console.log('hi', place);

  useEffect(() => {
    getPlaceByIP();
  }, []);
  return (
    <Info
      place={place}
      currentWeather={currentWeather}
    />
  );
}

export const mapStateToProps = (state) => ({
  place: selectPlace(state),
  currentWeather: selectCurrentWeather(state),
});

export const mapDispatchToProps = (dispatch) => ({
  getPlaceByIP() {
    dispatch(getDefaultPlace());
  },
});

InfoContainer.propTypes = {
  place: PropTypes.string,
  currentWeather: PropTypes.shape({}),
  getPlaceByIP: PropTypes.func,
};

InfoContainer.defaultProps = {
  place: '',
  currentWeather: {},
  getPlaceByIP: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer);
