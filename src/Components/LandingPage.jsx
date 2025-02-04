// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar"; // Import Navbar
import Hero from "./Hero"; // Import Hero (this works now as Hero is a default export)
import About from "./About"; // Import About
import { CanvasRevealEffectDemo } from "./Tech"; // Import Tech
import { CanvasRevealEffectDemo3 } from "./Team";

function LandingPage() {
  return (
    <div className="landing-page">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <CanvasRevealEffectDemo />
      <CanvasRevealEffectDemo3 />
    </div>
  );
}

export default LandingPage;
