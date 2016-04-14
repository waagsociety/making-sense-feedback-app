import React from 'react';
import Helmet from 'react-helmet';

import '../assets/main.css';
import Sensors from '../components/sensors';
import Footer from '../components/Footer';
import Header from '../components/Header';
import icons from '../lib/icons';

function loadData(callback) {
  fetch('http://api.citysdk.waag.org/objects/test.airq.1184697')
    .then((response) => response.json())
    .then((json) => {
      callback(json.features[0].properties.layers['test.airq'].data);
    });
}

const Application = React.createClass({
  getInitialState() {
    return {
      sensors: [],
      srv_ts: '',
    };
  },
  componentWillMount() {
    loadData((data) => this.setState({
      sensors: [
        { name: 'temperature', value: data.temp },
        { name: 'pm10', value: data.pm10 },
        { name: 'pm25', value: data.pm25 },
        { name: 'no2a', value: data.no2a },
        // { name: 'no2b', value: data.no2b },
      ],
      srv_ts: data.srv_ts,
    }));
  },
  render() {
    return (
      <div>
        <Helmet
          title="AirQ"
          link={icons}
        />
        <Header active={true} />
        <Sensors sensors={this.state.sensors} />
        <Footer lastUpdated={this.state.srv_ts}/>
      </div>
    );
  },
});

export default Application;
