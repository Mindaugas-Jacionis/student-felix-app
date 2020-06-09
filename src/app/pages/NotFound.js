import React from "react";
import Button from "../components/Button/Button";

const NotFound = () => {
  return (
    <div className="hero is-large">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-size-1">
            404 - Page Not Found
          </h1>
          <Button linkTo="/">Go back main page</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
