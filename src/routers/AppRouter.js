import React from 'react';
import createHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header'
import LoginPage from '../components/LoginPage'
import DashboardPage from '../components/DashboardPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact />
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
