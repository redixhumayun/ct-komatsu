import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getIcebox } from '../../Selectors';

const Icebox = (props) => {
    return (
            <ul>
                { props.todos.map((todo, index) =>  <li key={index}>{todo.todo}</li>) }
            </ul>
    )
};

export default Icebox;