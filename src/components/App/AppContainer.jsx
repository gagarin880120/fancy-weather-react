import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import App from './App';
import { selectBackgroundImageURL } from '../../redux/selectors';

export function AppContainer({ backgroundImageURL }) {
  console.log(backgroundImageURL);
  return (
    <App
      backgroundImageURL={backgroundImageURL}
    />
  );
}

export const mapStateToProps = (state) => ({
  backgroundImageURL: selectBackgroundImageURL(state),
});

AppContainer.propTypes = {
  backgroundImageURL: PropTypes.string,
};

AppContainer.defaultProps = {
  backgroundImageURL: '',
};

export default connect(mapStateToProps)(AppContainer);
