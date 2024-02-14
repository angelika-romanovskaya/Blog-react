import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

function configureStoreProd(initialState) {
  const middlewares = [
    thunk,
  ];

  return createStore(
    createRootReducer, // root reducer with router state
    applyMiddleware(...middlewares)
);
}

function configureStoreDev(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(
    createRootReducer, // root reducer with router state
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(connectRouterHistory(nextRootReducer));
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
