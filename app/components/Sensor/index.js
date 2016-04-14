import React, { PropTypes } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Value from '../Value';
import styles from './sensor.css';

const Sensor = ({ sensor: { id, timestamp, temp, pm25, pm10, no2a } }) =>
  <div>
    <Header name={id} />
    <div className={styles.values}>
      <Value name="Temperature" value={temp} />
      <Value name="PM25" value={pm25} />
      <Value name="PM10" value={pm10} />
      <Value name="no2a" value={no2a} />
    </div>
    <Footer timestamp={timestamp} />
  </div>;

Sensor.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default Sensor;
