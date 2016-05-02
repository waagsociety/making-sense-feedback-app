import React, { PropTypes } from 'react';

import SensorTile from '../SensorTile';

import styles from './index.css';

const SensorList = ({ sensors }) =>
  <div className={styles.container}>
    {sensors.map((sensor) =>
      <div key={sensor.id} className={styles.listitem}>
        <SensorTile sensor={sensor} />
      </div>
    )}
  </div>;

SensorList.propTypes = {
  sensors: PropTypes.array.isRequired,
};

export default SensorList;
