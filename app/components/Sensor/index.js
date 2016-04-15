import React, { PropTypes } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Readout from '../Readout';

import styles from './sensor.css';

const Sensor = ({ sensor: { id, readings, timestamp } }) =>
  <div>
    <Header name={id} />
    <div className={styles.values}>
      {readings.map((reading) =>
        <div key={reading.name}>
          <Readout name={reading.name} value={reading.value} />
        </div>
      )}
    </div>
    <Footer lastUpdated={timestamp} />
  </div>;

Sensor.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default Sensor;
