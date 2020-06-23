import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentWeather from './CurrentWeather';
import { selectCurrentWeather } from '../../redux/selectors';

export function CurrentWeatherContainer({ currentWeather }) {
  // console.log(currentWeather);
  return (
    currentWeather
      ? (
        <CurrentWeather
          currentWeather={currentWeather}
        />
      ) : <div>Loading...</div>
  );
}

export const mapStateToProps = (state) => ({
  currentWeather: selectCurrentWeather(state),
});

CurrentWeatherContainer.propTypes = {
  currentWeather: PropTypes.shape({}),
};

CurrentWeatherContainer.defaultProps = {
  currentWeather: {},
};

export default connect(mapStateToProps)(CurrentWeatherContainer);
