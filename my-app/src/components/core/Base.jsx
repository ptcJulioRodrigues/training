import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './Welcome';
import NotFoundPage from './NotFound';
import PageWrapper from './PageWrapper';
import Todos from './../todo/Todos';

export class Base extends Component {
    getChildContext() {
        return { pageWrapperHeight: this.props.pageWrapperHeight };
    }

    render() {
        return (
            <PageWrapper>
                <div id="App" className="app-body">
                    <Switch>
                        <Route path="/home" component={Welcome} />
                        <Route path="/todo" component={Todos} />
                        <Route path="/somePath" component={Welcome} />
                        <Route path="/somePath2" component={Welcome} />
                        <Redirect exact from="/" to="/home" />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </PageWrapper>
        );
    }
}

Base.propTypes = {
    pageWrapperHeight: PropTypes.number
};

Base.childContextTypes = {
    pageWrapperHeight: PropTypes.number
};

Base.contextTypes = {
    pageWrapperHeight: PropTypes.number
};

export default withRouter(Base);

