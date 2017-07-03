import { GET_SAVED } from '../actions';

const startState = [];

const getSavedReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SAVED:
      return [...action.payload];
    default:
      return [...state];
  }
};

export default getSavedReducer;
