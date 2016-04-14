import React, { PropTypes } from 'react';
import styles from './footer.css';
import moment from 'moment';

const Footer = ({ lastUpdated }) => {
  const timeago = moment(lastUpdated).from(moment());
  return (
    <footer className={styles.container}>
      <p className={styles.footer}>Last updated {timeago}</p>
    </footer>
  );
};

Footer.propTypes = {
  lastUpdated: PropTypes.string.isRequired,
};

export default Footer;
