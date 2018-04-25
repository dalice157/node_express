//Redux modure , router 及 redux 的橋接
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
//Reducers 
import rootReducer from '../reducers'

//functional middleware
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'

const configureStore = (preloadedState) => {

  const store = createStore(
	  rootReducer,
		preloadedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	  applyMiddleware(thunk, apiMiddleware, routerMiddleware(browserHistory), createLogger())
	)
  return store;
}

export default configureStore;