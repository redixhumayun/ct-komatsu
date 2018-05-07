import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCompleted } from '../Selectors';

class Completed extends Component {
    render() {
        const todos = this.props.todos.map((todo, index) => 
            <li key={index}>{todo.todo}</li>
        )
        return (
            <ul>{todos}</ul>
        )
    }
};

export const mapStateToProps = (state) => ({
    todos: getCompleted(state)
});

export default connect(mapStateToProps, null)(Completed);