import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import "tachyons";
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './reducers'




const logger=createLogger();
const rootReducer=combineReducers({searchRobots, requestRobots})
const store=createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
