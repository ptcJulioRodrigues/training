import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {Base} from './components/core/Base';

class App extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <Router>
                    <Base />
                </Router>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
