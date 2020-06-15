import * as types from "./types";

export const toggleFavorite = (id, isFavorite) => {
  if (typeof isFavorite === "boolean") {
    return { type: isFavorite ? types.REMOVE_FAVORITE : types.ADD_FAVORITE, id };
  }

  return { type: types.TOGGLE_FAVORITE, id };
};

export const fetchMovies = ({ free } = {}) => {
  return async (dispatch, stuff) => {
    console.log(stuff);

    dispatch({ type: types.MOVIES_REQ });

    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/${free ? "free-" : ""}items`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.authorization,
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
