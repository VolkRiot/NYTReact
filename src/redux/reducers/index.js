import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import changeSearch from './reducers';
import getArticles from './resultsReducer';
import getSavedReducer from './savedReducer';

const rootReducer = combineReducers({
  search: changeSearch,
  results: getArticles,
  saved: getSavedReducer,
  router: routerReducer,
});

export default rootReducer;
