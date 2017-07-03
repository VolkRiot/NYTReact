import { combineReducers } from 'redux';
import changeSearch from './reducers';
import getArticles from './resultsReducer';

const rootReducer = combineReducers({
  search: changeSearch,
  results: getArticles,
});

export default rootReducer;
