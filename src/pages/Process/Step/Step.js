import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Step.scss";

const Step = (props) => {
  return (
    <div className="Step">
      <ScrollAnimation style={{height:"100%"}} animateIn="animate__fadeInUp">
        <div className="wrapper">
          <div className="number">
            <p>{props.number}</p>
          </div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>{" "}
      </ScrollAnimation>
    </div>
  );
};

export default Step;
