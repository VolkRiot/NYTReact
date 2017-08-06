import { GET_SAVED, DELETE_ONE_SAVED, SAVE_NEW } from '../actions';

const getSavedReducer = (state = { articles: [], loaded: false }, action) => {
  switch (action.type) {
    case GET_SAVED:
      return { articles: [...action.payload], loaded: true };
    case DELETE_ONE_SAVED:
      return { ...state, articles: [...action.payload] };
    case SAVE_NEW:
      return { ...state, articles: [...action.payload] };
    default:
      return { ...state };
  }
};

export default getSavedReducer;
