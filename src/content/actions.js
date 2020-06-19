import { createAction } from "redux-api-middleware";

import * as types from "./types";
import store from "../app/state";
import auth from "../auth";

export const toggleFavorite = (id, isFavorite) => {
  if (typeof isFavorite === "boolean") {
    return { type: isFavorite ? types.REMOVE_FAVORITE : types.ADD_FAVORITE, id };
  }

  return { type: types.TOGGLE_FAVORITE, id };
};

// fetch action creator using redux-thunk middleware
export const fetchMovies = ({ free } = {}) => {
  return async (dispatch) => {
    dispatch({ type: types.MOVIES_REQ });

    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/${free ? "free-" : ""}items`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: auth.selectors.getAccessToken(store.getState()),
        },
      }
    );
    if (!response.ok) {
      dispatch({
        type: types.MOVIES_FAILURE,
        payload: await response.json(),
        error: "Oops, only free content",
      });
    } else {
      dispatch({ type: types.MOVIES_SUCESS, payload: await response.json() });
    }
  };
};

export const fetchMovieById = (id) =>
  createAction({
    endpoint: `https://academy-video-api.herokuapp.com/content/items/${id}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: auth.selectors.getAccessToken(store.getState()),
    },
    types: [types.SINGLE_MOVIE_REQ, types.SINGLE_MOVIE_SUCESS, types.SINGLE_MOVIE_FAILURE],
  });
