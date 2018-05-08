import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IceboxComponent from '../Components/Icebox'

import { getIcebox } from '../Selectors'

class Icebox extends Component {
  render () {
    return (
      <IceboxComponent todos={this.props.todos} />
    )
  }
};

Icebox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  todos: getIcebox(state)
})

export default connect(mapStateToProps, null)(Icebox)
