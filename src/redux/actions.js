import NYTApi from '../client/utils/helpers';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';
export const CHANGE_START_YEAR = 'CHANGE_START_YEAR';
export const CHANGE_END_YEAR = 'CHANGE_END_YEAR';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const GET_SAVED = 'GET_SAVED';
export const DELETE_ONE_SAVED = 'DELETE_ONE_SAVED';

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

export const getSaved = () => {
  const saved = ApiHelper.getSaved()
    .then(resp => resp.data);

  return {
    type: GET_SAVED,
    payload: saved,
  };
};

export const deleteSaved = (id) => {
  const updated = ApiHelper.deleteArticle(id).then(() =>
     ApiHelper.getSaved().then(answ => answ.data),
  );

  return {
    type: DELETE_ONE_SAVED,
    payload: updated,
  };
};

// NytHelper.deleteArticle(article._id).then((resp) => {
//   if (resp.data.success) {
//     NytHelper.getSaved().then((answ) => {
//       this.socket.emit('new_saved');
//       this.setState({
//         savedArticles: answ.data,
//       });
//     });
//   }
// });
