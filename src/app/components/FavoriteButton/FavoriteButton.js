import React, { useState } from "react";
import "./FavoriteButton.scss";

const FavoriteButton = ({ children }) => {
  const [favorite, setFavorite] = useState(false);
  const onClick = () => {
    setFavorite((prevState) => !prevState);
  };
  const removeFavorite = "Remove 💔";
  const makefavorite = "Favorite";
  return (
    <a
      className="button is-primary has-text-weight-bold favorite-button"
      onClick={onClick}
    >
      {favorite ? removeFavorite : makefavorite}
    </a>
  );
};

export default FavoriteButton;
