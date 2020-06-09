import React, { useState, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";

import logo from "../../images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  let history = useHistory();
  const [burger, setBurger] = useState(false);
  const [auth, setAuth] = useState(
    localStorage.getItem("authorization") ? true : false
  );

  const onClick = () => setBurger((prevState) => !prevState);

  const logout = async () => {
    await fetch("https://academy-video-api.herokuapp.com/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("authorization"),
      }),
    });
    localStorage.removeItem("authorization");
    setAuth(false);
    history.replace("/");
  };

  console.log(auth);

  return (
    <nav className="navbar is-fixed-top has-background-black">
      <div className="navbar-brand">
        <Link
          className="navbar-item has-text-weight-bold has-text-primary"
          to="/"
        >
          <img src={logo} alt="Felix logo" />
        </Link>
        <button
          className={`navbar-burger burger-button burger ${
            burger && "is-active"
          }`}
          aria-label="menu"
          aria-expanded="false"
          onClick={onClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div
        className={`navbar-menu has-background-black ${burger && "is-active"}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {auth ? (
                <Fragment>
                  <Button linkTo="/content">Content</Button>
                  <Button onClick={logout}>Logout</Button>
                </Fragment>
              ) : (
                <Button linkTo="/login">Login</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
