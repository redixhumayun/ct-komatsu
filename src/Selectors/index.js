import { createSelector } from 'reselect';

const getTodos = (state) => {
    return state.todosReducer.todos
};

export const getIcebox = createSelector(
    [getTodos], 
    (todos) => todos.filter(todo => todo.category === 'Icebox' ? todo : null)
);