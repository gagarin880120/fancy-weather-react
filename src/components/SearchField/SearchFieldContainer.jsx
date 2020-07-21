import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import { selectCurrentDateInterval, selectLanguage } from '../../redux/selectors';
import { getAddressBySearch, setQuery } from '../../redux/actions';

export function SearchFieldContainer({ onSearch, currentDateInterval, language }) {
  return (
    <SearchField
      onSearch={onSearch}
      currentDateInterval={currentDateInterval}
      language={language}
    />
  );
}

export const mapStateToProps = (state) => ({
  currentDateInterval: selectCurrentDateInterval(state),
  language: selectLanguage(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onSearch(query, interval, lang) {
    dispatch(setQuery(query));
    dispatch(getAddressBySearch(query, lang, false, interval));
  },
});

SearchFieldContainer.propTypes = {
  onSearch: PropTypes.func,
  currentDateInterval: PropTypes.number,
  language: PropTypes.string,
};

SearchFieldContainer.defaultProps = {
  onSearch: null,
  currentDateInterval: 0,
  language: 'en',
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchFieldContainer);
