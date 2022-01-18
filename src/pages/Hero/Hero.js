import React from "react";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <div className="Hero">
      <div>
        <h1>CCAC</h1>
        <h2>Canada to Central Asia Connections</h2>
        <p>
          We faciliate, organize, and promote mutually beneficial business
          relationships between Canadian and Central Asian companies.
        </p>
        <button
          onClick={() => {
            props.scrollTo.current.scrollIntoView();
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
