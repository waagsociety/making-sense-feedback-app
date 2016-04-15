import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { fetchSensors } from '../redux/modules/sensors';

import '../assets/main.css';
import Sensor from '../components/Sensor';
import manifest from '../assets/manifest';

class Application extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchSensors());
  }
  render() {
    const { sensor } = this.props;

    return (
      <div>
        <Helmet title="AirQ" link={manifest.icons} />
        {sensor ? <Sensor sensor={sensor} /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const id = '1184697';
  return {
    sensor: state.sensors && state.sensors[id],
  };
}

Application.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sensor: PropTypes.object,
};

export default connect(
  mapStateToProps
)(Application);
