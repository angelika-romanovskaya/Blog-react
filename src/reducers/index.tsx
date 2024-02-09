import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import counter from './counterReducer'
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
  counter,
});

export default rootReducer;
