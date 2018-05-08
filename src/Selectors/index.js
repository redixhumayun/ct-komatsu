import { createSelector } from 'reselect'

const getTodos = (state) => {
  return state.todosReducer.todos
}

export const getIcebox = createSelector(
  [getTodos],
  (todos) => todos.filter(todo => todo.category === 'Icebox' ? todo : null)
)

export const getProgress = createSelector(
  [getTodos],
  (todos) => todos.filter(todo => todo.category === 'Progress' ? todo : null)
)

export const getCompleted = createSelector(
  [getTodos],
  (todos) => todos.filter(todo => todo.category === 'Completed' ? todo : null)
)
