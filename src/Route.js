import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/home';
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default Routers;