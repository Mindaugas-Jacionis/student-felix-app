import React from "react";
import { connect } from "react-redux";

import "./FavoriteButton.scss";

const FavoriteButton = ({ movieId, allFavorites, toggleFavorite }) => {
  const onClick = () => toggleFavorite(movieId);

  return (
    <button className="button is-primary has-text-weight-bold favorite-button" onClick={onClick}>
      {!!allFavorites && allFavorites.includes(movieId) ? "Remove 💔" : "Favorite"}
    </button>
  );
};

function mapStateToProps({ favorites }) {
  return {
    allFavorites: favorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (id) => dispatch({ type: "TOGGLE_FAVORITE", id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
