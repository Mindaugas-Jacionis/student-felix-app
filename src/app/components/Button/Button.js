import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const Button = ({ children, linkTo, onClick }) => {
  return linkTo ? (
    <Link
      to={linkTo ? linkTo : null}
      className="button is-primary has-text-weight-bold my-button"
    >
      {children}
    </Link>
  ) : (
    <button
      className="button is-primary has-text-weight-bold my-button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
