import React, { PropTypes } from 'react';

import Readout from '../Readout';
import SensorStatus from '../SensorStatus';
import TimeAgo from '../TimeAgo';
import styles from './index.css';

const SensorCard = ({ sensor: { id, sensorname, readings, status, timestamp, temperature, humidity } }) =>
  <div>
    <header className={styles.header}>
      <h1><SensorStatus status={status} />"{sensorname}" is {status}</h1>
    </header>
    <div className={styles.values}>
      {readings.map((reading) =>
        <div key={reading.name}>
          <Readout name={reading.name} value={reading.value} />
        </div>
      )}
    </div>
    <footer className={styles.footer}>
      <p>Temperature: {temperature} &#8451;</p>
      <p>Last updated <TimeAgo timestamp={timestamp} /></p>
      <p>Disclaimer: Let op! De waarden die u ziet zijn resultaten van experimentele en nieuwe technologie.<br/>
      De absolute waarden zijn nog niet betrouwbaar genoeg om grote conclusies uit te trekken. Wel is het mogelijk om fluctuaties te zien.<br/>
      Sommige sensors werken nog niet niet optimaal, vandaar dat er soms vreemde (negatieve) waarden verschijnen.</p>
    </footer>
  </div>;

SensorCard.propTypes = {
  sensor: PropTypes.object.isRequired,
};

export default SensorCard;
