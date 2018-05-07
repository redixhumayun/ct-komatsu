import createReducer from '../Helpers/createReducer'
import * as types from '../Actions/types'

export const todosReducer = createReducer({
    icebox: new Set(),
    progress: new Set(),
    completed: new Set()
}, {
  [types.ADD_TODO_ICEBOX] (state, action) {
    return Object.assign({...state}, {
        icebox: state.icebox.add(action.todo)
    });
  },
  [types.ADD_TODO_PROGRESS] (state, action) {
    return Object.assign({...state}, {
        progress: state.progress.add(action.todo)
    });
  }, 
  [types.ADD_TODO_COMPLETED] (state, action) {
    return Object.assign({...state}, {
        completed: state.completed.add(action.todo)
    });
  }
})