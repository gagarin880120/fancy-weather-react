import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import WeeklyWeather from './WeeklyWeather';
import { selectWeeklyWeather } from '../../redux/selectors';

export function WeeklyWeatherContainer({ weeklyWeather }) {
  console.log(weeklyWeather);
  return (
    weeklyWeather
      ? (
        <WeeklyWeather
          weeklyWeather={weeklyWeather}
        />
      ) : <div>Loading...</div>
  );
}

export const mapStateToProps = (state) => ({
  weeklyWeather: selectWeeklyWeather(state),
});

WeeklyWeatherContainer.propTypes = {
  weeklyWeather: PropTypes.instanceOf(Array),
};

WeeklyWeatherContainer.defaultProps = {
  weeklyWeather: [],
};

export default connect(mapStateToProps)(WeeklyWeatherContainer);
