import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";

import content from "../../../content";

import "./FavoriteButton.scss";

const FavoriteButton = ({ movieId, isFavorite, toggleFavorite }) => {
  const onClick = () => toggleFavorite(movieId, isFavorite);

  return (
    <button className="button is-primary has-text-weight-bold favorite-button" onClick={onClick}>
      {isFavorite ? "Remove 💔" : "Favorite"}
    </button>
  );
};

const withSecretToLife = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent history="VEry History" secretToLife={42} {...this.props} />;
    }
  }

  return HOC;
};

const enhance = compose(
  withRouter,
  withSecretToLife,
  connect(
    (state, { movieId }) => {
      return {
        isFavorite: content.selectors.isFavoriteById(state, movieId),
      };
    },
    (dispatch) => {
      return {
        toggleFavorite: bindActionCreators(content.actions.toggleFavorite, dispatch),
      };
    }
  )
);

export default enhance(FavoriteButton);
