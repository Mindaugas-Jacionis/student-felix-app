import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";

import content from "../../content";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Button from "../components/Button/Button";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(content.actions.fetchMovies({ free: true }));
  }, [dispatch]);

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

export default Home;
