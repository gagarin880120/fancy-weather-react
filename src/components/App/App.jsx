import React from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import NavBar from '../NavBar/NavBar';
import InfoContainer from '../Info';
import MapBoxContainer from '../MapBox';

function App({ backgroundImageURL }) {
  const style = { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.35) 100%), url(${backgroundImageURL})` };
  return (
    <div className={styles.wrapper} style={style}>
      <NavBar />
      <InfoContainer />
      <MapBoxContainer />
    </div>
  );
}

App.propTypes = {
  backgroundImageURL: PropTypes.string,
};

App.defaultProps = {
  backgroundImageURL: '',
};

export default hot(App);
