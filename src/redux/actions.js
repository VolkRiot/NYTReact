import NYTApi from '../client/utils/helpers';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const CHANGE_START_YEAR = 'CHANGE_START_YEAR';
export const CHANGE_END_YEAR = 'CHANGE_END_YEAR';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';

const ApiHelper = new NYTApi();

export const changeTerm = (term = null) => ({
  type: CHANGE_SEARCH_TERM,
  payload: term,
});

export const changeStartYr = (year = null) => ({
  type: CHANGE_START_YEAR,
  payload: year,
});

export const changeEndYr = (year = null) => ({
  type: CHANGE_END_YEAR,
  payload: year,
});

export const requestArticles = ({ topic, startYr, endYr }) => {
  const newArticles = ApiHelper.runQuery(topic, startYr, endYr)
  .then(resp => resp.data.response.docs);

  return {
    type: REQUEST_ARTICLES,
    payload: newArticles,
  };
};
