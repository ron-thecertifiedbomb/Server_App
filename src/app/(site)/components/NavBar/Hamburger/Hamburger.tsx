import React from 'react';

import styles from './styles.module.css';

const Hamburger = ({ showNavMenu, toggleShowNavBar }: { showNavMenu: boolean; toggleShowNavBar: () => void }): JSX.Element => {
  return (
    <div className={`${styles.hamburger} ${showNavMenu ? styles.open : ""}`} onClick={toggleShowNavBar}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Hamburger;

