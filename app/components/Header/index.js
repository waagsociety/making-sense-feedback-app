import React, { PropTypes } from 'react';
import styles from './header.css';

const Header = ({ name }) =>
  <header className={styles.container}>
    <h1><i className={styles.active}></i> {name} is working</h1>
  </header>;

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
