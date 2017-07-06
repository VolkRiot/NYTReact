import NYTApi from '../client/utils/helpers';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const CHANGE_START_YEAR = 'CHANGE_START_YEAR';
export const CHANGE_END_YEAR = 'CHANGE_END_YEAR';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const GET_SAVED = 'GET_SAVED';
export const DELETE_ONE_SAVED = 'DELETE_ONE_SAVED';
export const SAVE_NEW = 'SAVE_NEW';

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

export const requestArticles = ({ topic, startYr, endYr }) => (dispatch) => {
  ApiHelper.runQuery(topic, startYr, endYr).then((resp) => {
    dispatch({
      type: REQUEST_ARTICLES,
      payload: resp.data.response.docs,
    });
  });
};

export const getSaved = () => (dispatch) => {
  ApiHelper.getSaved().then((resp) => {
    dispatch({
      type: GET_SAVED,
      payload: resp.data,
    });
  });
};

export const deleteSaved = id => (dispatch) => {
  ApiHelper.deleteArticle(id).then(() =>
    ApiHelper.getSaved().then((answ) => {
      dispatch({
        type: DELETE_ONE_SAVED,
        payload: answ.data,
      });
    }),
  );
};

export const saveNewArticle = (headline, url) => (dispatch) => {
  ApiHelper.saveArticle(headline, url).then(() => {
    ApiHelper.getSaved().then((answ) => {
      dispatch({
        type: SAVE_NEW,
        payload: answ.data,
      });
    });
  });
};
