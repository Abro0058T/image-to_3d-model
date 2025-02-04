"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasEffect";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <h2 className="text-3xl md:text-5xl font-bold">Technologies</h2>

      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card icon="Frontend Development">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h3 className="text-xl font-bold">Languages</h3>
            <p>HTML, CSS, JavaScript</p>
            <h3 className="text-xl font-bold mt-4">Frameworks</h3>
            <p>React, Next.js</p>
            <h3 className="text-xl font-bold mt-4">UI Libraries</h3>
            <p>Tailwind CSS, MUI</p>
          </div>
        </Card>
        <Card icon="Backend Development">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-red-800"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h3 className="text-xl font-bold">Languages</h3>
            <p>Node.js, Ruby, Python</p>
            <h3 className="text-xl font-bold mt-4">Frameworks</h3>
            <p>Express.js, Ruby on Rails, Django</p>
            <h3 className="text-xl font-bold mt-4">Databases</h3>
            <p>PostgreSQL, MongoDB</p>
          </div>
        </Card>
        <Card icon="DevOps & Tools">
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-sky-600"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h3 className="text-xl font-bold">Version Control</h3>
            <p>Git, GitHub</p>
            <h3 className="text-xl font-bold mt-4">Deployment</h3>
            <p>Vercel, Docker, AWS</p>
            <h3 className="text-xl font-bold mt-4">Testing</h3>
            <p>Jest, Cypress</p>
          </div>
        </Card>
      </div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 text-center">
        {/* Enlarged Icon */}
        <div className="text-2xl md:text-2xl font-bold group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        {/* Title with Better Styling */}
        <h2 className="dark:text-white text-2xl md:text-2xl font-bold opacity-0 group-hover/canvas-card:opacity-100 text-black mt-4 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
