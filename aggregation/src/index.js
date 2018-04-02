import React from 'react';
import App from './App/App';
import { render } from 'react-dom';
import configureStore from './helper/store/configureStore';
const store = configureStore();

const renderApp = Component => {
    //eslint-disable-next-line
    render(<Component store={store} history={history} />,
        document.body
    );
};

renderApp(App);