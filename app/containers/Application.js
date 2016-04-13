import React from 'react';

import Sensor from '../components/Sensor';

function loadData(callback) {
  fetch('http://api.citysdk.waag.org/objects/test.airq.1')
    .then((response) => response.json())
    .then((json) => {
      callback(json.features[0].properties.layers['test.airq'].data);
    });
}

const Application = React.createClass({
  getInitialState() {
    return {
      temp: '',
      pm10: '',
      pm25: '',
      no2a: '',
      no2b: '',
    };
  },
  componentWillMount() {
    loadData((data) => this.setState({
      temp: data.temp,
      pm10: data.pm10,
      pm25: data.pm25,
      no2a: data.no2a,
      no2b: data.no2b,
    }));
  },
  render() {
    return (
      <div>
        <Sensor name="Temperature" value={this.state.temp} />
        <Sensor name="PM10" value={this.state.pm10} />
        <Sensor name="PM25" value={this.state.pm25} />
        <Sensor name="NO2" value={this.state.no2a} />
      </div>
    );
  },
});

export default Application;
