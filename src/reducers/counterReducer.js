import {INCREMENT, DECREMENT} from '../constants/actionTypes';
import initialState from './initialState';

export default function counterReducer(state = initialState.counter, action) {
    switch (action.type) {
      case INCREMENT:
        return {...state, count: state.count +1};
  
      case DECREMENT:
        return {...state, count: state.count - 1};

      default:{
        console.log(state)
        return state;
      }
    }
  }