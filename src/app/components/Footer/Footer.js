import React from "react";
import "./Footer.scss";
import cards from "../../images/cards.svg";

const Footer = () => {
  return (
    <footer className="footer has-background-black-ter">
      <div className="content">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p className="has-text-white">
                We care about your entertainment. Copyright © 2019–2020
                felix.com
              </p>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <img src={cards} alt="cards" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
