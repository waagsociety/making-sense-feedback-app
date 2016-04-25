import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import configureStore from './redux/create';
import App from './containers/App';
import Home from './containers/Home';
import Sensor from './containers/Sensor';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/sensor/:id" component={Sensor} />
      </Route>
    </Router>
  </Provider>,
document.getElementById('app'));
