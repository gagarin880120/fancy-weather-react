import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TemperatureScaleButton from './TemperatureScaleButton';
import { selectTemperatureScale } from '../../redux/selectors';
import { setTemperatureScale } from '../../redux/actions';

export function TemperatureScaleButtonContainer({ onScaleButtonClick, scale, temperatureScale }) {
  return (
    <TemperatureScaleButton
      onScaleButtonClick={onScaleButtonClick}
      scale={scale}
      temperatureScale={temperatureScale}
    />
  );
}

export const mapStateToProps = (state) => ({
  temperatureScale: selectTemperatureScale(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onScaleButtonClick(scale) {
    dispatch(setTemperatureScale(scale));
  },
});

TemperatureScaleButtonContainer.propTypes = {
  onScaleButtonClick: PropTypes.func,
  temperatureScale: PropTypes.string,
};

TemperatureScaleButtonContainer.defaultProps = {
  onScaleButtonClick: null,
  temperatureScale: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureScaleButtonContainer);
