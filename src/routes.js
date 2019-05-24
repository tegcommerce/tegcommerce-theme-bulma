import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './screens/home/home'
import Items from './screens/items/index'
import ModalUser from './components/user/usermodal'
import User from './components/user/user'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/items' component={Items} />
            <Route exact path='/login' component={User} />
        </Switch>
    </BrowserRouter>
);

export default Routes;