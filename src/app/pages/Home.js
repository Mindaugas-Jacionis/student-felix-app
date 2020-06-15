import React, { Fragment, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import content from "../../content";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Button from "../components/Button/Button";

const Home = ({ fetchMovies }) => {
  useEffect(() => {
    fetchMovies({ free: true });
  }, [fetchMovies]);

  return (
    <Fragment>
      <Hero />
      <Movies>
        <div className="has-text-centered">
          <Button>Get More Content</Button>
        </div>
      </Movies>
    </Fragment>
  );
};

const enhance = connect(null, (dispatch) => ({
  fetchMovies: bindActionCreators(content.actions.fetchMovies, dispatch),
}));

export default enhance(Home);
