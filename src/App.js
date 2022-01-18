import React, { useRef } from "react";
import "./App.scss";
import "./normalize.css"
import About from "./pages/About/About";
import Hero from "./pages/Hero/Hero";
import Process from "./pages/Process/Process";
import "animate.css/animate.min.css";

const App = () => {
  const aboutRef = useRef(null);

  return (
    <div className="App">
      <Hero scrollTo={aboutRef} />
      <About ref={aboutRef} />
      <Process/>
    </div>
  );
};

export default App;
