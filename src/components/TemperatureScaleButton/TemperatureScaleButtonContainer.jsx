import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TemperatureScaleButton from './TemperatureScaleButton';
import { setTemperatureScale } from '../../redux/actions';

export function TemperatureScaleButtonContainer({ onScaleButtonClick, scale }) {
  return (
    <TemperatureScaleButton
      onScaleButtonClick={onScaleButtonClick}
      scale={scale}
    />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onScaleButtonClick(scale) {
    dispatch(setTemperatureScale(scale));
  },
});

TemperatureScaleButtonContainer.propTypes = {
  onScaleButtonClick: PropTypes.func,
};

TemperatureScaleButtonContainer.defaultProps = {
  onScaleButtonClick: null,
};

export default connect(null, mapDispatchToProps)(TemperatureScaleButtonContainer);
