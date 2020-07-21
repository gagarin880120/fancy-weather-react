import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TemperatureScaleButton from './TemperatureScaleButton';
import { selectTemperatureScale } from '../../redux/selectors';
import { setTemperatureScale } from '../../redux/actions';

export function TemperatureScaleButtonContainer({ scale, onScaleButtonClick, temperatureScale }) {
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
  scale: PropTypes.string,
  onScaleButtonClick: PropTypes.func,
  temperatureScale: PropTypes.string,
};

TemperatureScaleButtonContainer.defaultProps = {
  scale: '',
  onScaleButtonClick: null,
  temperatureScale: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(TemperatureScaleButtonContainer);
