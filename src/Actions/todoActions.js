import * as types from './types';
/*
    This is a an action creator to dispatch an action to add 
    a new todo
*/
export const addTodo = ({ id, category, todo }) => ({ 
    type: types.ADD_TODO, 
    payload: { id, category, todo } 
})

/*
    This is an action creator to dispatch an action to fetch todos
    from a server on initial load
*/

export const getTodos = () => ({ 
    type: types.GET_TODOS, 
    payload: { 
        request: {
            url: '/todos'
        } 
    } 
});

/*
    This is an action creator to dispatch an action to post todos
    to a server on submit
*/
export const postTodo = ({ id, category, todo }) => ({
    type: types.POST_TODO,
    payload: {
        request: {
            url: '/todos',
            method: 'POST',
            data: { id, category, todo }
        }
    }
});

