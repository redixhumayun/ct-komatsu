import createAction from '../Helpers/createAction';
import * as types from './types';

/*
    This is a generic action creator which can be used to service 
    three separate cases
*/
export const addTodo = ({ type, payload }) => createAction({ type, payload });