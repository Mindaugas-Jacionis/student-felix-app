import React from "react";
import { connect, useSelector } from "react-redux";

import content from "../../../content";
import Card from "../Card/Card";
import "./Movies.scss";

const Movies = ({ movies, loading, children }) => {
  const error = useSelector(content.selectors.getMoviesError);

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

const enhance = connect((state) => ({
  movies: content.selectors.getMoviesData(state),
  loading: content.selectors.isFetchingMovies(state),
  // error: content.selectors.getMoviesError(state),
}));

export default enhance(Movies);
