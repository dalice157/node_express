import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import itemReducer from './items';
import userReducer from './user';
import listReducer from './list';

const rootReducer = combineReducers({
  // entities,
  routing,  
  itemReducer,
  userReducer,
  listReducer
})


export default rootReducer;