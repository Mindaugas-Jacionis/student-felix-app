import React from "react";
import { useSelector } from "react-redux";

import content from "../../../content";
import Card from "../Card/Card";
import "./Movies.scss";

const Movies = ({ children }) => {
  const error = useSelector(content.selectors.getMoviesError);
  const movies = useSelector(content.selectors.getMoviesData);
  const loading = useSelector(content.selectors.isFetchingMovies);

  return (
    <div className="section">
      <div className="container movies-container">
        <div className="columns is-multiline">
          {loading && !error && (
            <h3 className="has-text-white has-text-centered">Loading movies...</h3>
          )}
          {error && <h3 className="has-text-danger has-text-centered">{error}</h3>}
          {!!movies &&
            movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  title={movie.title}
                  description={movie.description.substring(0, 55)}
                  image={movie.image}
                  movieId={movie.id}
                />
              );
            })}
          {error && <h3 className="has-text-white has-text-centered">{error}</h3>}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Movies;
