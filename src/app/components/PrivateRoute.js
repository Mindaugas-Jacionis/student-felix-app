import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = (props) => {
  const token = localStorage.getItem("authorization");
  const location = useLocation();
  if (token) return <Route {...props} />;

  return (
    <Redirect to={{ pathname: "/login", state: { referrer: location } }} />
  );
};

export default PrivateRoute;
