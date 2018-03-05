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
    render(<Component store={store}/>,
        document.getElementById('root')
    );
};

renderApp(App);

