import React, { PropTypes } from 'react';

import styles from './readout.css';

const Readout = ({ name, value }) =>
  <div className={styles.container}>
    <div className={styles.value}>
      <span>{value}</span>
    </div>
    <h3 className={styles.name}>{name}</h3>
  </div>;

Readout.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Readout;
