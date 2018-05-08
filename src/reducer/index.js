import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './articles';
import filterState from './filterState';

export default combineReducers({
  count: counterReducer,
  articles,
  filterState
});