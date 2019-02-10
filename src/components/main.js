import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './loginpage';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={DefaultPage} />
        </Switch>
    </HashRouter>
)

export default Main;
