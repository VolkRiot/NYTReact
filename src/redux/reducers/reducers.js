import { CHANGE_SEARCH_TERM, CHANGE_START_YEAR, CHANGE_END_YEAR } from '../actions';

const startState = {
  topic: 'Obama',
  startYr: '2007',
  endYr: '2009',
};

const changeSearch = (state = startState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return { ...state, topic: action.payload };
    case CHANGE_START_YEAR:
      return { ...state, startYr: action.payload };
    case CHANGE_END_YEAR:
      return { ...state, endYr: action.payload };
    default:
      return { ...state };
  }
};

export default changeSearch;
