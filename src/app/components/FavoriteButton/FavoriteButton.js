import React from "react";
import { useSelector, useDispatch } from "react-redux";

import content from "../../../content";

import "./FavoriteButton.scss";

const FavoriteButton = ({ movieId }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => content.selectors.isFavoriteById(state, movieId));

  const onClick = () => dispatch(content.actions.toggleFavorite(movieId, isFavorite));

  return (
    <button className="button is-primary has-text-weight-bold favorite-button" onClick={onClick}>
      {isFavorite ? "Remove 💔" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
