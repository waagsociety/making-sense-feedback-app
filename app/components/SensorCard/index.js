import React, { PropTypes } from 'react';

import SensorStatus from '../SensorStatus';
import TimeAgo from '../TimeAgo';
import styles from './index.css';

const SensorCard = ({ sensor: { id, status, timestamp, temperature } }) =>
  <div>
    <header className={styles.header}>
      <h1><SensorStatus status={status} />{id} is {status}</h1>
    </header>
    <footer className={styles.footer}>
      <p>Temperature: {temperature} &#8451;</p>
      <p>Last updated <TimeAgo timestamp={timestamp} /></p>
    </footer>
  </div>;

SensorCard.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default SensorCard;
