import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIcebox } from '../Selectors';

class Icebox extends Component {
    render() {
        const todos = this.props.todos.map((todo, index) => 
            <li key={index}>{todo.todo}</li>
        )
        return (
            <ul>{todos}</ul>
        )
    }
};

const mapStateToProps = (state) => ({
    todos: getIcebox(state)
});

export default connect(mapStateToProps, null)(Icebox);