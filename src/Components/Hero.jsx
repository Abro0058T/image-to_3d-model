import React from "react";
import { Vortex } from "./vortex";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="w-full mx-auto rounded-md h-[50rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        containerClassName="w-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Floorplan 3D Conversion
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center"></p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          {/* <StarButton onClick={() => navigate("/building-model")}>
            Convert
          </StarButton> */}

          <button
            onClick={() => navigate("/building-model")}
            className="button-1"
          >
            <span class="fold"></span>

            <div class="points_wrapper">
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
              <i class="point"></i>
            </div>

            <span class="inner">
              <svg
                class="icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
              >
                <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
              </svg>
              Convert
            </span>
          </button>

          <button className="button-2 px-4 py-2 text-white">More</button>
        </div>
      </Vortex>
    </div>
  );
};

export default Hero;
