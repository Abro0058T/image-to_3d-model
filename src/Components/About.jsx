import React from "react";
import { CompareDemo } from "./About2";

const About = () => {
  return (
    <div className="w-full mt-12 mb-12 min-h-screen flex flex-col md:flex-row items-start px-6 md:px-16 py-12 text-white">
      {/* Left Half - Heading & Summary */}
      <div className="w-full md:w-1/2 flex flex-col justify-start text-center md:text-left self-start">
        <h2 className="text-3xl md:text-5xl font-bold">About</h2>
        <p className="mt-4 pr-4 text-lg md:text-xl text-gray-300">
          This website is designed to provide an engaging and interactive
          experience, featuring cutting-edge technology and sleek animations.
          This website is designed to provide an engaging and interactive
          experience, featuring cutting-edge technology and sleek animations.
          This website is designed to provide an engaging and interactive
          experience, featuring cutting-edge technology and sleek animations.
        </p>
      </div>

      {/* Right Half - Separate Component */}
      <div className="w-full md:w-1/2 flex justify-center items-start">
        <CompareDemo />
      </div>
    </div>
  );
};

export default About;
