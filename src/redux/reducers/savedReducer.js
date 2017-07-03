import { GET_SAVED, DELETE_ONE_SAVED } from '../actions';

const startState = [];

const getSavedReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SAVED:
      return [...action.payload];
    case DELETE_ONE_SAVED:
      return [...action.payload];
    default:
      return [...state];
  }
};

export default getSavedReducer;
