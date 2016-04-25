import React from 'react';
import moment from 'moment';

const Timeago = ({ timestamp }) =>
  <span>{moment(timestamp).from(moment())}</span>;

Timeago.propTypes = {
  timestamp: (props, propName, componentName) => {
    if (!moment(props[propName]).isValid()) {
      return new Error(`Invalid prop '${propName}' supplied to '${componentName}' Validation failed.`);
    }
    return null;
  },
};

export default Timeago;
