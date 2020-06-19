import * as types from "./types";

const DEFAULT_CONTET_STATE = {
  favorites: [],
  movies: {
    loading: false,
    error: null,
    data: [],
  },
};

const addFavorite = (state, action) => ({ ...state, favorites: [...state.favorites, action.id] });
const removeFavorite = (state, action) => ({
  ...state,
  favorites: state.favorites.filter((id) => id !== action.id),
});

function contentReducer(state = DEFAULT_CONTET_STATE, action) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE:
      return !state.favorites.includes(action.id)
        ? addFavorite(state, action)
        : removeFavorite(state, action);
    case types.REMOVE_FAVORITE:
      return removeFavorite(state, action);
    case types.ADD_FAVORITE:
      return addFavorite(state, action);

    case types.MOVIES_REQ:
      return { ...state, movies: { ...state.movies, loading: true, error: null } };
    case types.MOVIES_FAILURE:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          data: action.payload,
          error: action.error,
        },
      };
    case types.MOVIES_SUCESS:
      return { ...state, movies: { ...state.movies, loading: false, data: action.payload } };

    case types.SINGLE_MOVIE_REQ:
      return { ...state, movies: { ...state.movies, loading: true, error: null } };
    case types.SINGLE_MOVIE_FAILURE:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          error: "Error while fetching movie",
        },
      };
    case types.SINGLE_MOVIE_SUCESS:
      return {
        ...state,
        movies: {
          ...state.movies,
          loading: false,
          data: state.movies.data.some(({ id }) => id === action.payload.id)
            ? state.movies.data
            : [...state.movies.data, action.payload],
        },
      };

    default:
      return state;
  }
}

export default contentReducer;
