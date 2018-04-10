import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './router/index';
import {browserHistory} from 'react-router';

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store/index'

import './css/style.css';


function setup() {
  const initState = window.__INITIAL_STATE__;

  const store = configureStore(initState);
  const history = syncHistoryWithStore(browserHistory, store);
  return (
    <Provider store={store}>
      <Routes history={history}></Routes>
    </Provider>
  );
}


ReactDOM.render(
  setup(),
  document.getElementById('root')
);