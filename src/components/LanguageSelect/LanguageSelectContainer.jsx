import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LanguageSelect from './LanguageSelect';
import { setLanguage } from '../../redux/actions';

export function LanguageSelectContainer({ onLanguageChange }) {
  return (
    <LanguageSelect
      onLanguageChange={onLanguageChange}
    />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onLanguageChange(lang) {
    dispatch(setLanguage(lang));
  },
});

LanguageSelectContainer.propTypes = {
  onLanguageChange: PropTypes.func,
};

LanguageSelectContainer.defaultProps = {
  onLanguageChange: () => {},
};

export default connect(null, mapDispatchToProps)(LanguageSelectContainer);
