import React from 'react'

const Completed = (props) => {
  return (
    <ul>
      {props.todos.map((todo, index) => <li key={index}>{todo.todo}</li>)}
    </ul>
  )
}

export default Completed
