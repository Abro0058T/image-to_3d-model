"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasEffect";
import { AnimatedTestimonialsDemo } from "./Team2";
export function CanvasRevealEffectDemo3() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[50rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center  w-full gap-4 mx-auto px-8 relative"
    >
      <div className="relative z-10">
        {" "}
        <h2 className="text-3xl md:text-5xl font-bold">Team</h2>
        <AnimatedTestimonialsDemo />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={3}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </div>
  );
}
