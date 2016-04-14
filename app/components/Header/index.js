import React, { PropTypes } from 'react';
import styles from './header.css';

const Header = ({ active, name }) =>
  <header className={styles.container}>
    <h1><i className={active ? styles.active : styles.default}></i> {name} is working</h1>
  </header>;

Header.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;
