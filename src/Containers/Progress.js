import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProgress } from '../Selectors';

class Progress extends Component {
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
    todos: getProgress(state)
});

export default connect(mapStateToProps, null)(Progress);