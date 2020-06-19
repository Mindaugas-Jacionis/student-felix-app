import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import content from "../../../content";
import Button from "../../components/Button/Button";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import "./Movie.scss";

const Movie = () => {
  const [watch, setWatch] = useState(false);
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => content.selectors.getMovieById(state, movieId));
  const loading = useSelector(content.selectors.isFetchingMovies);
  const error = useSelector(content.selectors.getMoviesError);

  useEffect(() => {
    if (!movie) {
      dispatch(content.actions.fetchMovieById(movieId));
    }
  }, [dispatch, movie, movieId]);

  const toggleModal = () => setWatch((prevState) => !prevState);

  return (
    <div className="section movie-section">
      <div className="container">
        {loading && <h3 className="has-text-white has-text-centered">Loading movie...</h3>}
        {error && <h3 className="has-text-white has-text-centered">{error}</h3>}
        {!!movie && (
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
                  <FavoriteButton movieId={movie.id} />
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
      </div>
    </div>
  );
};

export default Movie;
