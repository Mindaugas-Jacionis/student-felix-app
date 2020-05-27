import React from "react";
import "./Card.scss";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Card = ({ title, description, image }) => {
  return (
    <div className="column is-one-third">
      <div className="card has-background-black-ter equal-height">
        <div className="card-image">
          <figure className="image is-square">
            <img src={image} alt="Placeholder image" />
          </figure>
        </div>

        <div className="content">
          <h2 className="has-text-white is-size-3">{title}</h2>
          <p className="has-text-white">{description}...</p>
        </div>
        <footer className="card-footer">
          <FavoriteButton>Favorite</FavoriteButton>
        </footer>
      </div>
    </div>
  );
};

export default Card;
