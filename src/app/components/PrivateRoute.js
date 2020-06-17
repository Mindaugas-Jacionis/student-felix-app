import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import auth from "../../auth";

const PrivateRoute = (props) => {
  const location = useLocation();
  const isAuthenticated = !!useSelector(auth.selectors.getAccessToken);

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to={{ pathname: "/login", state: { referrer: location } }} />;
};

export default PrivateRoute;
