import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import content from "../../../content";
import Movies from "../../components/Movies/Movies";

const Content = ({ fetchMovies, error }) => {
  const history = useHistory();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem("authToken");
      history.replace("/");
    }
  }, [error, history]);

  return <Movies />;
};

const enhance = connect(
  (state) => ({
    error: content.selectors.getMoviesError(state),
  }),
  (dispatch) => ({
    fetchMovies: bindActionCreators(content.actions.fetchMovies, dispatch),
  })
);

export default enhance(Content);
