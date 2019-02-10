import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './loginpage';
import DefaultPage from './defaultpage';
import RegisterPage from './registerpage';

const Main = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/main" component={DefaultPage} />
            <Route exact path="/registerpage" component={RegisterPage} />
        </Switch>
    </HashRouter>
)

export default Main;