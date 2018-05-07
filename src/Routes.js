import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';

/* Containers */
import Todos from './Containers/Todos';
import Navigation from './Containers/Navigation';
import Icebox from './Containers/Icebox';
import Progress from './Containers/Progress';
import Completed from './Containers/Completed';

const Routes = ({ translate }) => {
    return (
        <Router history={history}>
            <Switch>
                <Navigation>
                    <Route exact path="/" component={Todos} />
                    <Route path="/icebox" component={Icebox} />
                    <Route path="/progress" component={Progress} />
                    <Route path="/completed" component={Completed} />
                </Navigation>
            </Switch>
        </Router>
    )
}

export default Routes
