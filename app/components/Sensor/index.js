import React, { PropTypes } from 'react';

import styles from './sensor.css';

const Sensor = ({ name, value }) =>
  <div className={styles.container}>
    <div className={styles.value}>
      <span>{value}</span>
    </div>
    <h3 className={styles.name}>{name}</h3>
  </div>;

Sensor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Sensor;
