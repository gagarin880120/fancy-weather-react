import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentDate from './CurrentDate';
import { selectCurrentDate } from '../../redux/selectors';

export function CurrentDateContainer({ currentDate }) {
  return (
    <CurrentDate
      currentDate={currentDate}
    />
  );
}

export const mapStateToProps = (state) => ({
  currentDate: selectCurrentDate(state),
});

CurrentDateContainer.propTypes = {
  currentDate: PropTypes.string,
};

CurrentDateContainer.defaultProps = {
  currentDate: '',
};

export default connect(mapStateToProps)(CurrentDateContainer);
