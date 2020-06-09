import React, { useState, useEffect, useCallback } from "react";
import Movies from "../../components/Movies/Movies";

const Content = ({ favorite, setFavorite }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      "https://academy-video-api.herokuapp.com/content/items",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.authorization,
        },
      }
    );
    if (!response.ok) {
      return setError("Error while fetching movies");
    }
    setMovies(await response.json());
    setLoading(false);
  }, [setError, setMovies, setLoading]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);
  return (
    <Movies
      movies={movies}
      loading={loading}
      error={error}
      favorite={favorite}
      setFavorite={setFavorite}
    />
  );
};

// class Content extends Component {
//   state = {
//     movies: [],
//     error: "",
//     loading: false,
//   };

//   async componentDidMount() {
//     this.setState({ loading: true });
//     const response = await fetch(
//       "https://academy-video-api.herokuapp.com/content/items",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: localStorage.authorization,
//         },
//       }
//     );
//     if (!response.ok) {
//       return this.setState({ error: "Error while fetching movies" });
//     }
//     const movies = await response.json();
//     this.setState({ movies: movies });
//     this.setState({ loading: false });
//   }

//   render() {
//     return (
//       <Movies
//         movies={this.state.movies}
//         loading={this.state.loading}
//         error={this.state.error}
//         favorite={this.props.favorite}
//         setFavorite={this.props.setFavorite}
//       />
//     );
//   }
// }

export default Content;
