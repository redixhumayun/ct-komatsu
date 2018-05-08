import createReducer from '../Helpers/createReducer'
import * as types from '../Actions/types'

export const todosReducer = createReducer({
  todos: [],
  complete: false
}, {
  [types.ADD_TODO] (state, action) {
    const { todo, category } = { ...action.payload }
    return Object.assign({...state}, {
      todos: [...state.todos, { todo, category }]
    })
  },
  [types.GET_TODOS_SUCCESS] (state, action) {
    return Object.assign({...state}, {
      todos: [...state.todos, ...action.payload.data],
      complete: true
    })
  }
})
