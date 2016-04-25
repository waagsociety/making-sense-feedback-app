import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import manifest from '../assets/manifest';

import '../assets/main.css';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet title="AirQ" link={manifest.icons} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
