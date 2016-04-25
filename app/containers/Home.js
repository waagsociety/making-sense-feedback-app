import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSensors } from '../redux/modules/sensors';

import SensorList from '../components/SensorList';

class Home extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSensors());
  }

  render() {
    return (
      <div>
        <SensorList sensors={this.props.sensors} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sensors: Object.keys(state.sensors || {}).map((key) => state.sensors[key]),
  };
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sensors: PropTypes.array,
};

export default connect(
  mapStateToProps
)(Home);
