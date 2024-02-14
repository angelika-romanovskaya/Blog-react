import { combineReducers } from 'redux';
import counter from './counterReducer'
import {postsReducer} from './postReducer'
import { usersReducer } from './userReducer';
import { commentsReducer } from './commentReducer';
import { authReducer } from './authReducer';

export const rootReducer = combineReducers({
  counter: counter,
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  auth: authReducer
});

export default rootReducer

