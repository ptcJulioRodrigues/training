import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Welcome from './LOWelcome';
import NotFoundPage from './LONotFound';

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
                    {/*<ToastrContainer />*/}
                    <Switch>
                        <Route path="/event/:eventId" component={Welcome} />
                        <Route path="/todo" component={Todos} />
                        <Route path="/home" component={Welcome} />
                        <Route path="/search" component={Welcome} />
                        <Redirect exact from="/" to="/home" />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </PageWrapper>
        );
    }

    componentDidMount() {
    }

    componentWillUnmount() {
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

export default withRouter(
    connect(null, {})(Base)
);

