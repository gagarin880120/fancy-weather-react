import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LanguageSelect from './LanguageSelect';
import { setLanguage, getAddressBySearch } from '../../redux/actions';
import { selectQuery } from '../../redux/selectors';

export function LanguageSelectContainer({ onLanguageChange, query }) {
  return (
    <LanguageSelect
      onLanguageChange={onLanguageChange}
      query={query}
    />
  );
}

export const mapStateToProps = (state) => ({
  query: selectQuery(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onLanguageChange(lang, query) {
    dispatch(setLanguage(lang));
    dispatch(getAddressBySearch(query, lang, true));
  },
});

LanguageSelectContainer.propTypes = {
  onLanguageChange: PropTypes.func,
  query: PropTypes.string,
};

LanguageSelectContainer.defaultProps = {
  onLanguageChange: () => {},
  query: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelectContainer);
