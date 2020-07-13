import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';
import {
  selectBackgroundImageURL, selectIsModalOpen, selectCurrentWeather, selectCurrentDate,
  selectWeeklyWeather,
} from '../../redux/selectors';
import { getDefaultAddress } from '../../redux/actions';

export function AppContainer({
  backgroundImageURL, isModalOpen, currentWeather, currentDate, weeklyWeather, onAppLoad
}) {
  return (
    <App
      backgroundImageURL={backgroundImageURL}
      isModalOpen={isModalOpen}
      currentWeather={currentWeather}
      currentDate={currentDate}
      weeklyWeather={weeklyWeather}
      onAppLoad={onAppLoad}
    />
  );
}

export const mapStateToProps = (state) => ({
  backgroundImageURL: selectBackgroundImageURL(state),
  isModalOpen: selectIsModalOpen(state),
  currentWeather: selectCurrentWeather(state),
  currentDate: selectCurrentDate(state),
  weeklyWeather: selectWeeklyWeather(state),
});
export const mapDispatchToProps = (dispatch) => ({
  onAppLoad() {
    dispatch(getDefaultAddress());
  },
});

AppContainer.propTypes = {
  backgroundImageURL: PropTypes.string,
  isModalOpen: PropTypes.bool,
};

AppContainer.defaultProps = {
  backgroundImageURL: '',
  isModalOpen: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
