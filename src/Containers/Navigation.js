import React, { Component } from 'react';
import { default as MUIAppBar } from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import { Link, withRouter } from 'react-router-dom';

import Button from 'material-ui/Button';

const TodosLink = props => <Link to='/' {...props} />
const IceboxLink = props => <Link to='/icebox' {...props} />;
const ProgressLink = props => <Link to='/progress' {...props} />;
const CompletedLink = props => <Link to='/completed' {...props} />;

class Navigation extends Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <MUIAppBar position='static' color='primary'>
                    <Toolbar>
                        <Button component={TodosLink}>Todos</Button>
                        <Button component={IceboxLink}>Icebox</Button>
                        <Button component={ProgressLink}>Progress</Button>
                        <Button component={CompletedLink}>Completed</Button>
                    </Toolbar>
                </MUIAppBar>
                {children}
            </div>
        )
    }
};

export default withRouter(Navigation);