import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import styles from './App.module.css';
import NavBar from '../NavBar/NavBar';
import Info from '../Info/Info';
import MapBoxContainer from '../MapBox';
import ModalContainer from '../Modal';
import Spinner from '../Spinner/Spinner';

function App({
  backgroundImageURL, isModalOpen, currentWeather, currentDate, weeklyWeather, onAppLoad,
}) {
  useEffect(() => {
    onAppLoad();
  }, []);
  const style = {backgroundImage: `linear-gradient(0deg, rgba(0,0,0,.4) 0%, rgba(0,0,0,.5) 100%), url(${backgroundImageURL})` };
  return (
    <>
      {
        (currentWeather && currentDate && weeklyWeather)
          ? (
            <div className={styles.wrapper} style={style}>
              <NavBar />
              <Info />
              <MapBoxContainer />
            </div>
          )
          : <Spinner />
      }
      {
        isModalOpen ? <ModalContainer /> : null
      }
    </>
  );
}

App.propTypes = {
  backgroundImageURL: PropTypes.string,
  isModalOpen: PropTypes.bool,
};

App.defaultProps = {
  backgroundImageURL: '',
  isModalOpen: false,
};

export default hot(App);
