import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Card = ({
  movieId,
  title,
  description,
  image,
  favorite,
  setFavorite,
}) => {
  return (
    <div className="column is-one-third">
      <div className="card has-background-black-ter equal-height movie-card">
        <div className="card-image">
          <figure className="image is-square">
            <Link to={`/content/${movieId}`}>
              <img src={image} alt={`${title} poster`} />
            </Link>
          </figure>
        </div>

        <div className="content">
          <Link to={`/content/${movieId}`}>
            <h2 className="has-text-white is-size-3">{title}</h2>
          </Link>
          <p className="has-text-white">{description}...</p>
        </div>
        <footer className="card-footer">
          <FavoriteButton
            favorite={favorite}
            setFavorite={setFavorite}
            movieId={movieId}
          >
            Favorite
          </FavoriteButton>
        </footer>
      </div>
    </div>
  );
};

export default Card;
