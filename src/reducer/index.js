import {combineReducers} from 'redux';
import counterReducer from './counter';
import articles from './articles';
import comments from './comments';
import filterState from './filterState';
import language from './language';

export default combineReducers({
  count: counterReducer,
  articles,
  filterState,
  comments,
  lang: language
});