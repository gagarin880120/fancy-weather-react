import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './App.module.css';
import NavBar from './components/NavBar/NavBar';
import Info from './components/Info/Info';

function App() {
  return (
    <div className={styles.wrapper}>
      <NavBar />
      <Info />
    </div>
  );
}

export default hot(App);
