import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
// import asyncComponent from './AsyncComponent';
import PageWrapper from './PageWrapper';
import Home from '../home/Home';
import Notes from '../notes/Dashboard';


//const AsyncHome = asyncComponent(()=> require('./home'))
/*const AsyncTodos = asyncComponent(() => {});
const AsyncWelcome = asyncComponent(() => {});
const AsyncNotFound = asyncComponent(() => {});*/

export class Router extends Component {
    render() {
        return (
            <PageWrapper>
                <div id="App" className="app-body">
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/notes" component={Notes} />
                        <Redirect exact from="/" to="/home" />
                        <Route component={Home} />
                    </Switch>
                </div>
            </PageWrapper>
        );
    }
}

export default withRouter(Router);

