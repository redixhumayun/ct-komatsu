import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from 'material-ui/styles'
import { defaultTheme } from './themes'
import { Router } from 'react-router-dom'
import history from './history'

ReactDOM.render(
    <Router history={history} component={App}>
        <MuiThemeProvider theme={defaultTheme}>
            <App />
        </MuiThemeProvider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
