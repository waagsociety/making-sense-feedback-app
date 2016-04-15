import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/create';
import Application from './containers/Application';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
document.getElementById('app'));
