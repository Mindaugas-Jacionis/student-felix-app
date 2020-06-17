import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "../Button/Button";
import logo from "../../images/logo.svg";
import auth from "../../../auth";
import "./Navbar.scss";

const Navbar = () => {
  const [burger, setBurger] = useState(false);
  const token = useSelector(auth.selectors.getAccessToken);
  const dispatch = useDispatch();

  const logout = () => dispatch(auth.actions.logout(token));
  const onClick = () => setBurger((prevState) => !prevState);

  return (
    <nav className="navbar is-fixed-top has-background-black">
      <div className="navbar-brand">
        <Link className="navbar-item has-text-weight-bold has-text-primary" to="/">
          <img src={logo} alt="Felix logo" />
        </Link>
        <button
          className={`navbar-burger burger-button burger ${burger && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={onClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div className={`navbar-menu has-background-black ${burger && "is-active"}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!!token ? (
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
