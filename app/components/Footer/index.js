import React, { PropTypes } from 'react';
import styles from './footer.css';
import moment from 'moment';

const Footer = ({ timestamp }) => {
  const timeago = moment(timestamp).from(moment());
  return (
    <footer className={styles.container}>
      <p className={styles.footer}>Last updated {timeago}</p>
    </footer>
  );
};

Footer.propTypes = {
  timestamp: PropTypes.string.isRequired,
};

export default Footer;
