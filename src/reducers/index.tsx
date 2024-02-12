import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import counter from './counterReducer'

const rootReducer = history => combineReducers({
  fuelSavings,
  counter,
});

export default rootReducer;
