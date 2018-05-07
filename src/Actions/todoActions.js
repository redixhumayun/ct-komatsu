import createAction from '../Helpers/createAction';

/*
    This is a generic action creator which can be used to service 
    three separate cases
*/
export const addTodo = ({ type, payload }) => createAction({ type, payload });