import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import { MuiThemeProvider } from 'material-ui/styles'
import { defaultTheme } from './themes'
import { Router } from 'react-router-dom'
import history from './history'

import App from './App'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} component={App}>
      <MuiThemeProvider theme={defaultTheme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
