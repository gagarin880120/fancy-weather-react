import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import InfoContainer from './components/Info';

function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <InfoContainer />
    </div>
  );
}

export default hot(App);
