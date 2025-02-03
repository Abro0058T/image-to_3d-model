// LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar"; // Import Navbar
import Hero from "./Hero"; // Import Hero (this works now as Hero is a default export)
import About from "./About"; // Import About
import Tech from "./Tech"; // Import Tech

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <div className="text-center py-10">
        <Link to="/building-model">
          <button className="btn">Go to Building Model</button>
        </Link>
        <Link to="/form-interface">
          <button className="btn">Go to Form Interface</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
