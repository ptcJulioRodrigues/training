import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import configureStore from './helper/store/configureStore';

//TODO: remove if not used
import registerServiceWorker from './registerServiceWorker';
registerServiceWorker();

const store = configureStore();

const renderApp = Component => {
    //eslint-disable-next-line
    render(<Component store={store} history={history} />,
        document.getElementById('root')
    );
};

renderApp(App);

