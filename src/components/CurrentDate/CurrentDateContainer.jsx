import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentDate from './CurrentDate';
import { selectCurrentDate } from '../../redux/selectors';

export function CurrentDateContainer({ currentDate }) {
  return (
    currentDate
      ? (
        <CurrentDate
          currentDate={currentDate}
        />
      ) : <div>Loading...</div>
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
