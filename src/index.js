import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/root-reducer';

import { HashRouter as Router, Route } from 'react-router-dom';

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import {App} from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const loggerMiddleware = createLogger();

let store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));

ReactDOM.render(<Provider store={store}>
    <Router>
        <App store={store} />
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
