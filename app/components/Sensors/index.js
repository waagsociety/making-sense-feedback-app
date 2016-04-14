import React, { PropTypes } from 'react';
import Sensor from '../Sensor';
import styles from './sensors.css';

const Sensors = ({ sensors }) =>
  <div className={styles.container}>
    {sensors.map((sensor) =>
      <div key={sensor.name}>
        <Sensor name={sensor.name} value={sensor.value} />
      </div>
    )}
  </div>;

Sensors.propTypes = {
  sensors: PropTypes.array.isRequired,
};

export default Sensors;
