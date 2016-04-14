import React, { PropTypes } from 'react';

import styles from './value.css';

const Value = ({ name, value }) =>
  <div className={styles.container}>
    <div className={styles.value}>
      <span>{value}</span>
    </div>
    <h3 className={styles.name}>{name}</h3>
  </div>;

Value.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Value;
