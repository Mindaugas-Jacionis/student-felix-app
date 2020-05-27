import React from "react";
import "./Hero.scss";
import heroImage from "../../images/hero.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero is-large has-background">
      <img
        alt="Fill Murray"
        className="hero-background is-transparent"
        src={heroImage}
      />
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title has-text-white is-size-1">Want more content?</h1>
          <Button>Get Access</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
