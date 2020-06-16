import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import auth from "../../auth";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const location = useLocation();

  if (isAuthenticated) {
    return <Route {...props} />;
  }

  return <Redirect to={{ pathname: "/login", state: { referrer: location } }} />;
};

const enhance = connect((state) => {
  return {
    isAuthenticated: !!auth.selectors.getAccessToken(state),
  };
});

export default enhance(PrivateRoute);
