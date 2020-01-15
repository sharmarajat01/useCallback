import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import homeComponent from './pages/home'
import demo from './pages/demo';
import counterOne from './pages/counter';
import NotFound from './pages/notFound';
import Timer from './pages/timer';


function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route path='/home' exact component={homeComponent} {...props} />
                <Route path='/demo' exact component={demo} {...props} />
                <Route path='/counter' exact component={counterOne} {...props} />
                <Route path='/timer' exact component={Timer} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;