import {
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };

    case GET_USER:
      return { ...state, user: action.payload, loading: false };

    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };

    case CLEAR_USER:
      return { ...state, users: [], loading: false };

    case SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default githubReducer;
