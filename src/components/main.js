import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './loginpage';
import DefaultPage from './defaultpage';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={DefaultPage} />
        </Switch>
    </HashRouter>
)

export default Main;
