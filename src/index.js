import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './store/index';
import App from './app';

import './css/style.css';


function setup() {
  const initState = window.__INITIAL_STATE__;

  const store = configureStore(initState);
  const history = syncHistoryWithStore(browserHistory, store);

  return (
    <App store={store} history={history} />
  );
}


ReactDOM.render(
  setup(),
  document.getElementById('root')
);