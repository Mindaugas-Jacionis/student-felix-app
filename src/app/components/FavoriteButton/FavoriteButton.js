import React from "react";
import "./FavoriteButton.scss";

const FavoriteButton = ({ movieId, favorite, setFavorite }) => {
  const onClick = () => {
    setFavorite((prevState) => {
      if (!prevState.includes(movieId)) {
        return [...prevState, movieId];
      } else {
        return prevState.filter((id) => id !== movieId);
      }
    });
  };
  return (
    <button
      className="button is-primary has-text-weight-bold favorite-button"
      onClick={onClick}
    >
      {!!favorite && favorite.includes(movieId) ? "Remove 💔" : "Favorite"}
    </button>
  );
};

export default FavoriteButton;
