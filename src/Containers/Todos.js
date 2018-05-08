import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import TodosComponent from '../Components/Todos';
import { ActionCreators } from '../Actions';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            category: '',
            counter: 4
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ todo: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { id, category, todo } = this.state;
        this.props.addTodo({ id, category, todo });
        this.props.postTodo({ id, category, todo });
        this.setState({
            todo: '',
            category: '',
            counter: this.state.counter + 1
        });
    }

    handleCategoryChange(event) {
        this.setState({ category: event.target.value });
    }

    render() {
        return (
            <TodosComponent 
                handleCategoryChange={this.handleCategoryChange}
                handleSubmit={this.handleSubmit} 
                handleInputChange={this.handleInputChange}
                todo={this.state.todo} 
                category={this.state.category}
            />
        )
    }

    componentDidMount() {
        if (!this.props.complete) {
            this.props.getTodos();
        }
        this.props.getDummyData();
    }
};

Todos.propTypes = {
    addTodo: PropTypes.func.isRequired,
    complete: PropTypes.bool.isRequired,
    getTodos: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    todos: state.todosReducer.todos,
    complete: state.todosReducer.complete
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Todos);