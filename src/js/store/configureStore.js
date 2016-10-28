import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

const debug = true;

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default function configureStore(initialState) {
  let store;
  if (debug) {
    store = createStoreWithMiddleware(rootReducer, initialState,
      window.devToolsExtension && window.devToolsExtension());
  } else {
    store = createStoreWithMiddleware(rootReducer, initialState);
  }
  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
