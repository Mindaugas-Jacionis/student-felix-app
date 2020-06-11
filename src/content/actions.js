import * as types from "./types";

export const toggleFavorite = (id, isFavorite) => {
  if (typeof isFavorite === "boolean") {
    return { type: isFavorite ? types.REMOVE_FAVORITE : types.ADD_FAVORITE, id };
  }

  return { type: types.TOGGLE_FAVORITE, id };
};
