import React, { Component } from 'react';
import {
    TextField,
    InputLabel,
    Button,
    Paper,
    MenuItem,
    Select,
    FormControl,
    FormHelperText
} from 'material-ui';
import { withStyles } from 'material-ui/styles';

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
        console.log(this.state.todo);
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
                        placeholder="New Todo"
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
                        className={classes.button}
                        onClick={this.handleSubmit}>Submit</Button>
                </div>
            </Paper>
        )
    }
};

export default withStyles(styles)(Todos);