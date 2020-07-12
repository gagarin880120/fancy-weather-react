import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import { selectCurrentDateInterval } from '../../redux/selectors';
import { getAddressBySearch } from '../../redux/actions';

export function SearchFieldContainer({ onSearch, currentDateInterval }) {
  return (
    <SearchField
      onSearch={onSearch}
      currentDateInterval={currentDateInterval}
    />
  )
}

export const mapStateToProps = (state) => ({
  currentDateInterval: selectCurrentDateInterval(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSearch(query, interval) {
    clearInterval(interval);
    dispatch(getAddressBySearch(query));
  },
});

SearchFieldContainer.propTypes = {
  onSearch: PropTypes.func,
  currentDateInterval: PropTypes.number,
}

SearchFieldContainer.defaultProps = {
  onSearch: null,
  currentDateInterval: 0,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFieldContainer);
