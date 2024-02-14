import { combineReducers } from 'redux';
import counter from './counterReducer'
import {postsReducer} from './postReducer'
import { usersReducer } from './userReducer';
import { commentsReducer } from './commentReducer';

export const rootReducer = combineReducers({
  counter: counter,
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default rootReducer

