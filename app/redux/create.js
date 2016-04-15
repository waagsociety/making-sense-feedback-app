import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './modules/reducer';

export default function configureStore(initialState) {
  const logger = createLogger({
    collapsed: true,
  });

  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk, logger)
  ));

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      const nextReducer = require('./modules/reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
