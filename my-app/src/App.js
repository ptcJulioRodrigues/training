import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Engine } from './components/core/Engine';

class App extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <Router>
                    <Engine />
                </Router>
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired
};

export default App;
