import createAction from '../Helpers/createAction';

/*
    This is a generic action creator which can be used to service 
    three separate cases
*/
export const addTodo = ({ type, todo }) => createAction({ type, todo });

/*
    This is an action creator to dispatch an action to fetch todos
    from a server on initial load
*/
export const getTodos = ({ type, payload }) => createAction({ type, payload });