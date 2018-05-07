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

import * as types from '../Actions/types';
import { ActionCreators } from '../Actions';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        margin: theme.spacing.unit * 12
    },
    textField: {
        marginTop: theme.spacing.unit * 4
    },
    categoryField: {
        marginTop: theme.spacing.unit * 4
    },
    button: {
        marginTop: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 12
    },
    select: {
        marginLeft: theme.spacing.unit * 2
    }
})

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
            category: ''
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
        switch (this.state.category) {
            case 'ICEBOX':
                this.props.addTodo({ type: types.ADD_TODO_ICEBOX, todo: this.state.todo });
                break;
            case 'PROGRESS':
                this.props.addTodo({ type: types.ADD_TODO_PROGRESS, todo: this.state.todo });
                break;
            case 'COMPLETED':
                this.props.addTodo({ type: types.ADD_TODO_COMPLETED, todo: this.state.todo });
                break;
            default:
                break;
        };
        this.setState({
            todo: '', 
            category: ''
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
                        value={this.state.todo}
                        placeholder="New Todo"
                        onChange={this.handleInputChange} />
                    <div className={classes.categoryField}>
                        <InputLabel>Category</InputLabel>
                        <Select className={classes.select}
                            value={this.state.category}
                            onChange={this.handleCategoryChange}>
                            <MenuItem value={'ICEBOX'}>Icebox</MenuItem>
                            <MenuItem value={'PROGRESS'}>Progress</MenuItem>
                            <MenuItem value={'COMPLETED'}>Completed</MenuItem>
                        </Select>
                    </div>
                    <Button
                        className={classes.button}
                        onClick={this.handleSubmit}>Submit</Button>
                </div>
            </Paper>
        )
    }
    
    componentDidMount() {
        this.props.getTodos({ type: types.GET_TODOS, payload: { request: {} } });
    }
};

const mapStateToProps = (state) => ({
    todos: state.todosReducer
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(ActionCreators, dispatch)
)

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(Todos);