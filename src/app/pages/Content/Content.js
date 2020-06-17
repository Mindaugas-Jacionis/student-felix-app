import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import content from "../../../content";
import Movies from "../../components/Movies/Movies";

const Content = () => {
  const history = useHistory();
  const error = useSelector(content.selectors.getMoviesError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(content.actions.fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      localStorage.removeItem("authToken");
      history.replace("/");
    }
  }, [error, history]);

  return <Movies />;
};

export default Content;
