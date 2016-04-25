import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import SensorStatus from '../SensorStatus';

import styles from './index.css';

const SensorTile = ({ sensor: { id, status } }) =>
  <div className={styles.container}>
    <Link to={`/sensor/${id}`}><SensorStatus status={status} /> {id}</Link>
  </div>;

SensorTile.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default SensorTile;
