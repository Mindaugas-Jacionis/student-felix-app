import React, { useState, useEffect, useCallback, Fragment } from "react";
import { useParams } from "react-router-dom";
import Button from "../../components/Button/Button";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import "./Movie.scss";

const Movie = ({ favorite, setFavorite }) => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const [watch, setWatch] = useState(false);
  const [loading, setLoading] = useState(false);

  const getMovie = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://academy-video-api.herokuapp.com/content/items/${movieId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) return setError("Error while fetching movie");
    const movieObj = await response.json();

    setMovie(movieObj);
    setLoading(false);
  }, [setMovie, movieId]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  const toggleModal = () => setWatch((prevState) => !prevState);
  return (
    <div className="section movie-section">
      <div className="container">
        {!error && !loading && (
          <Fragment>
            <article className="media">
              <figure className="media-left">
                <img
                  src={movie.image}
                  className="image"
                  width="300"
                  alt={`${movie.title} poster`}
                />
              </figure>
              <div className="media-content">
                <div className="content">
                  <h2 className="title has-text-white">{movie.title}</h2>
                  <p className="subtitle has-text-white">{movie.description}</p>
                  <Button onClick={toggleModal}>Watch</Button>
                  <FavoriteButton
                    favorite={favorite}
                    setFavorite={setFavorite}
                    movieId={movie.id}
                  />
                </div>
              </div>
            </article>
            <div className={`modal ${watch ? "is-active" : ""}`}>
              <div className="modal-background" onClick={toggleModal}></div>
              <div className="modal-content">
                <div className="videoWrapper">
                  <iframe title="video" src={movie.video}></iframe>
                </div>
              </div>
              <button
                className="modal-close is-large"
                aria-label="close"
                onClick={toggleModal}
              ></button>
            </div>
          </Fragment>
        )}

        {loading && !error && (
          <h3 className="has-text-white has-text-centered">Loading movie...</h3>
        )}
        {error && <h3 className="has-text-white has-text-centered">{error}</h3>}
      </div>
    </div>
  );
};

export default Movie;
