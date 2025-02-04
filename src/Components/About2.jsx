import React from "react";
import { Compare } from "./Compare";
import img1 from "../assets/2dbp.jpg"; // Correct extension
import img2 from "../assets/3dbp.avif"; // Correct extension

export function CompareDemo() {
  return (
    <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4">
      <Compare
        firstImage={img1} // Using imported image
        secondImage={img2} // Using imported image
        firstImageClassName="object-cover object-left-top"
        secondImageClassName="object-cover object-left-top"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
        slideMode="hover"
        autoplay="true"
      />
    </div>
  );
}
