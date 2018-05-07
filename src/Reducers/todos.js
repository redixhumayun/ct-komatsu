import createReducer from '../Helpers/createReducer'
import * as types from '../actions/types'

export const counter = createReducer({
    icebox: new Set(),
    progress: new Set(),
    completed: new Set()
}, {
  [types.ADD_TODO_ICEBOX] (state, action) {
    return Object.assign({...state}, {
        icebox: icebox.add(action.payload)
    });
  },
  [types.ADD_TODO_PROGRESS] (state, action) {
    return Object.assign({...state}, {
        progress: progress.add(action.payload)
    });
  }, 
  [types.ADD_TODO_COMPLETED] (state, action) {
    return Object.assign({...state}, {
        completed: completed.add(action.payload)
    });
  }
})