import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

Icebox.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    todos: getIcebox(state)
});

export default connect(mapStateToProps, null)(Icebox);