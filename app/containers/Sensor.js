import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSensors } from '../redux/modules/sensors';

import SensorCard from '../components/SensorCard';

import '../assets/main.css';

class Sensor extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSensors());
  }

  render() {
    const { sensor } = this.props;

    return (
      <div>
        {sensor ? <SensorCard sensor={sensor} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    sensor: state.sensors && state.sensors[props.params.id],
  };
}

Sensor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sensor: PropTypes.object,
};

export default connect(
  mapStateToProps
)(Sensor);
