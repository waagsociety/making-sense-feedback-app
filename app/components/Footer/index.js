import React from 'react';
import styles from './footer.css';
import moment from 'moment';

const Footer = ({ lastUpdated }) =>
  <footer className={styles.container}>
    <p className={styles.footer}>Last updated {moment(lastUpdated).from(moment())}</p>
  </footer>;

Footer.propTypes = {
  lastUpdated: (props, propName, componentName) => {
    if (!moment(props[propName]).isValid()) {
      return new Error(`Invalid prop '${propName}' supplied to '${componentName}' Validation failed.`);
    }
    return null;
  },
};

export default Footer;
