import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default withRouter(App);
