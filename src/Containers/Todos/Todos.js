import React, { Component } from 'react';
import {
    TextField,
    InputLabel,
    Button,
    Paper,
    MenuItem,
    Select
} from 'material-ui';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as types from '../../Actions/types';
import { ActionCreators } from '../../Actions';

import styles from './styles'

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
        const { classes } = this.props;
        return (
            <Paper className={classes.paper}>
                <div className={classes.content}>
                    <TextField
                        className={classes.textField}
                        label="New Todo"
                        value={this.state.todo}
                        onChange={this.handleInputChange} />

                    <div className={classes.categoryField}>
                        <InputLabel>Category</InputLabel>
                        <Select className={classes.select}
                            value={this.state.category}
                            onChange={this.handleCategoryChange}>
                            <MenuItem value={'Icebox'}>Icebox</MenuItem>
                            <MenuItem value={'Progress'}>Progress</MenuItem>
                            <MenuItem value={'Completed'}>Completed</MenuItem>
                        </Select>
                    </div>

                    <Button
                        size="medium"
                        variant="raised"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleSubmit}>Submit</Button>
                </div>
            </Paper>
        )
    }
    
    componentDidMount() {
        if(!this.props.complete) {
            this.props.getTodos();
        }
        this.props.getDummyData();
    }
};

Todos.propTypes = {
    addTodo: PropTypes.func.isRequired, 
    classes: PropTypes.object.isRequired,
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

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Todos);