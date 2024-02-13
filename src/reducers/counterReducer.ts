import {INCREMENT, DECREMENT} from '../constants/actionTypes';


export const initialStateCounter = {
  counter: {
    count: 0
  }
};

export default function counterReducer(state = initialStateCounter.counter, action) {
    switch (action.type) {
      case INCREMENT:
        return {...state, count: state.count +1};
  
      case DECREMENT:
        return {...state, count: state.count - 1};

      default:{
        return state;
      }
    }
  }