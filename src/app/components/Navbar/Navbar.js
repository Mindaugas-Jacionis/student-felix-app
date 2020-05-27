import React, { useState } from "react";
import Button from "../Button/Button";

import logo from "../../images/logo.svg";

const Navbar = () => {
  const [burger, setBurger] = useState(false);

  const onClick = () => {
    setBurger((prevState) => !prevState);
  };

  return (
    <nav className="navbar has-background-black">
      <div className="navbar-brand">
        <a
          className="navbar-item has-text-weight-bold has-text-primary"
          href="!#"
        >
          <img src={logo} alt="Felix logo" />
        </a>
        <a
          role="button"
          className={`navbar-burger burger ${burger && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={onClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`navbar-menu has-background-black ${burger && "is-active"}`}
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Button>Sign In</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
