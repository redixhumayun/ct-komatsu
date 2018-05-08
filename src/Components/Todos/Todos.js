import React from 'react'
import {
  TextField,
  InputLabel,
  Button,
  Paper,
  MenuItem,
  Select
} from 'material-ui'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

import styles from './styles'

const Todos = (props) => {
  const { classes } = props
  return (
    <Paper className={classes.paper}>
      <div className={classes.content}>
        <TextField
          className={classes.textField}
          label='New Todo'
          value={props.Todo}
          onChange={props.handleInputChange} />

        <div className={classes.categoryField}>
          <InputLabel>Category</InputLabel>
          <Select className={classes.select}
            value={props.category}
            onChange={props.handleCategoryChange}>
            <MenuItem value={'Icebox'}>Icebox</MenuItem>
            <MenuItem value={'Progress'}>Progress</MenuItem>
            <MenuItem value={'Completed'}>Completed</MenuItem>
          </Select>
        </div>

        <Button
          size='medium'
          variant='raised'
          color='primary'
          className={classes.button}
          onClick={props.handleSubmit}>Submit</Button>
      </div>
    </Paper>
  )
}

Todos.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCategoryChange: PropTypes.func.isRequired
}

export default withStyles(styles)(Todos)
