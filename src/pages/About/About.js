import React from "react";
import "./About.scss";
import ScrollAnimation from "react-animate-on-scroll";

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="About">
      <div className="content">
        <ScrollAnimation animateIn="animate__fadeInLeft">
          <div className="text">
            <h1>About</h1>

            <p>
              We are a group of professionals with extensive experience, solid
              background and, wide network of professional connections in All
              levels of governments, professional organizations, large, medium,
              small businesses and individuals both in Canada and Central Asian
              Countries.….to promote business relations between Canada and
              Central Asian Countries.
            </p>
          </div>
        </ScrollAnimation>
      </div>
      <div className="image"></div>
    </div>
  );
});

export default About;
