import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import itemReducer from './items';

const rootReducer = combineReducers({
  // entities,
  routing,  
  itemReducer
})


export default rootReducer;