import React, { Component } from "react";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./Movies.scss";

class Movies extends Component {
  state = {
    error: "",
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch(
      "https://academy-video-api.herokuapp.com/content/free-items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) this.setState({ error: "Error while fetching movies" });
    this.setState({ movies: await response.json() });
    this.setState({ loading: false });
  }
  render() {
    const { movies, error, loading } = this.state;

    return (
      <div className="container movies-container">
        <div className="columns is-multiline">
          {error ? (
            <h3 className="has-text-danger has-text-centered">{error}</h3>
          ) : !loading && movies ? (
            movies.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  title={movie.title}
                  description={movie.description.substring(0, 55)}
                  image={movie.image}
                />
              );
            })
          ) : (
            <h3 className="has-text-white has-text-centered">
              Loading movies...
            </h3>
          )}
        </div>
        <div className="has-text-centered">
          <Button>Get More Content</Button>
        </div>
      </div>
    );
  }
}

export default Movies;
