import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import asyncComponent from './AsyncComponent';
import PageWrapper from './PageWrapper';

const AsyncContacts = asyncComponent(() => import('./../contacts/Contacts'));
const AsyncTodos = asyncComponent(() => import('./../todo/Todos'));
const AsyncWelcome = asyncComponent(() => import('./Welcome'));
const AsyncNotFound = asyncComponent(() => import('./NotFound'));

export class Engine extends Component {
    render() {
        return (
            <PageWrapper>
                <div id="App" className="app-body">
                    <Switch>
                        <Route path="/home" component={AsyncWelcome} />
                        <Route path="/todo" component={AsyncTodos} />
                        <Route path="/contacts" component={AsyncContacts} />
                        <Route path="/somePath2" component={AsyncWelcome} />
                        <Redirect exact from="/" to="/home" />
                        <Route component={AsyncNotFound} />
                    </Switch>
                </div>
            </PageWrapper>
        );
    }
}

export default withRouter(Engine);

