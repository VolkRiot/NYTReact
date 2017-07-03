import { REQUEST_ARTICLES } from '../actions';

const startState = [];

const getArticles = (state = startState, action) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return [...action.payload];
    default:
      return [...state];
  }
};

export default getArticles;
