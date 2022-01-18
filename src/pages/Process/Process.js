import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./Process.scss";
import Step from "./Step/Step";

const Process = () => {
  return (
    <div className="Process">
      <div className="header">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <h1>How we do it</h1>
        </ScrollAnimation>
      </div>
      <div className="steps">
        <Step
          title="EXPRESSION OF INTEREST"
          content="Should you be interested in working with us, please complete EoI form. We will be in-touch with you."
          number={1}
        />
        <Step
          title="INTERVIEW"
          content="We discuss “what do you have to offer”, “what are your company’s needs”"
          number={2}
        />
        <Step
          title="PRELIMINARY RESEARCH"
          content="We conduct Market research, Opportunity Screening, Preliminary Feasibility Study, Contacts Search"
          number={3}
        />
        <Step
          title="PROJECT DEVELOPMENT"
          content="We provide SME Consultancy, Develop Entry Strategy, Facilitate Representation of your company, Project Consultancy"
          number={4}
        />
      </div>
          <button>GET STARTED</button>
    </div>
  );
};

export default Process;
