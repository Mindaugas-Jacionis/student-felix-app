import React, { Fragment, useState, useEffect, useCallback } from "react";

import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Button from "../components/Button/Button";

const Home = ({ setFavorite }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://academy-video-api.herokuapp.com/content/free-items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) return setError("Error while fetching movies");
    setMovies(await response.json());
    setLoading(false);
  }, [setError, setMovies, setLoading]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <Fragment>
      <Hero />
      <Movies movies={movies} loading={loading} error={error} setFavorite={setFavorite}>
        <div className="has-text-centered">
          <Button>Get More Content</Button>
        </div>
      </Movies>
    </Fragment>
  );
};

// class Home extends Component {
//   state = {
//     movies: [],
//     error: "",
//     loading: false,
//   };
//   async componentDidMount() {
//     this.setState({ loading: true });
//     const response = await fetch(
//       "https://academy-video-api.herokuapp.com/content/free-items",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok)
//       return this.setState({ error: "Error while fetching movies" });
//     this.setState({ movies: await response.json() });
//     this.setState({ loading: false });
//   }
//   render() {
//     return (
//       <Fragment>
//         <Hero />
//         <Movies
//           movies={this.state.movies}
//           loading={this.state.loading}
//           error={this.state.error}
//           favorite={this.props.favorite}
//           setFavorite={this.props.setFavorite}
//         >
//           <div className="has-text-centered">
//             <Button>Get More Content</Button>
//           </div>
//         </Movies>
//       </Fragment>
//     );
//   }
// }

export default Home;
