import React, { PropTypes } from 'react';

import styles from './index.css';

const SensorStatus = ({ status }) =>
  <i className={[styles.container, styles[status]].join(' ')}></i>;

SensorStatus.propTypes = {
  status: PropTypes.oneOf(['online', 'offline']).isRequired,
};

export default SensorStatus;
