import { combineReducers } from 'redux';
import * as todosReducer from './todos';

export default combineReducers({ ...todosReducer });