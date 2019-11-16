import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import homeComponent from './home'
import demo from './demo';
import counterOne from './counter';
import NotFound from './notFound';


function Routes(props) {
    return (
        <Router>
            <Switch>
                <Route path='/home' exact component={homeComponent} {...props} />
                <Route path='/demo' exact component={demo} {...props} />
                <Route path='/counter' exact component={counterOne} {...props} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default Routes;