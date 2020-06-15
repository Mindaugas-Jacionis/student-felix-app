import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import content from "../../../content";
import Movies from "../../components/Movies/Movies";

const Content = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return <Movies />;
};

const enhance = connect(null, (dispatch) => ({
  fetchMovies: bindActionCreators(content.actions.fetchMovies, dispatch),
}));

export default enhance(Content);
