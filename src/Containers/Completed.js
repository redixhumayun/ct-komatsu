import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CompletedComponent from '../Components/Completed'
import { getCompleted } from '../Selectors'

class Completed extends Component {
  render () {
    return (
      <CompletedComponent todos={this.props.todos} />
    )
  }
};

Completed.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

export const mapStateToProps = (state) => ({
  todos: getCompleted(state)
})

export default connect(mapStateToProps, null)(Completed)
