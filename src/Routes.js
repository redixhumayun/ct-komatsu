import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

/* Containers */
import Todos from './Containers/Todos';
import Navigation from './Containers/Navigation';

const Routes = ({ translate }) => {
    return (
        <Router history={history}>
            <Switch>
                <Navigation>
                    <Route exact path="/" component={Todos} />
                </Navigation>
            </Switch>
        </Router>
    )
}

export default Routes
