import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import Routes from './router/index';

const App = ({ store, history }) => (
  <Provider store={store}>    
		<Router history={history} routes={Routes} />    
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default App;