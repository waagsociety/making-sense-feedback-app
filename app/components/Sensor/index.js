import './index.css';
import React, { PropTypes } from 'react';

const Sensor = ({ name, value }) =>
  <div className="Sensor">
    <div className="Sensor__value">
      <span>{value}</span>
    </div>
    <h3>{name}</h3>
  </div>;

Sensor.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Sensor;
