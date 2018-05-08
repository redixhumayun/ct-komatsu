import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProgressComponent from '../Components/Progress'

import { getProgress } from '../Selectors'

class Progress extends Component {
  render () {
    return (
      <ProgressComponent todos={this.props.todos} />
    )
  }
};

Progress.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

export const mapStateToProps = (state) => ({
  todos: getProgress(state)
})

export default connect(mapStateToProps, null)(Progress)
