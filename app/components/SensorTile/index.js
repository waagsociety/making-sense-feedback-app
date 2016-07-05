import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SensorStatus from '../SensorStatus';

import styles from './index.css';

const SensorTile = ({ sensor: { id, sensorname, status } }) =>
  <div className={styles.container}>
    <Link className={styles.link} to={`/sensor/${id}`}><SensorStatus status={status} /> {sensorname}</Link>
  </div>;

SensorTile.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default SensorTile;
