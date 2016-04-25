import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import styles from './index.css';

const SensorTile = ({ sensor: { id } }) =>
  <div className={styles.container}>
    <Link to={`/sensor/${id}`}>{id}</Link>
  </div>;

SensorTile.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default SensorTile;
