import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getCompleted } from '../../Selectors';

const Completed = (props) => {
    return (
            <ul>
                { props.todos.map((todo, index) =>  <li key={index}>{todo.todo}</li>) }
            </ul>
    )
};

export default Completed;