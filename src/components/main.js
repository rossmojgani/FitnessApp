import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './loginpage';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
        </Switch>
    </HashRouter>
)

export default Main;
