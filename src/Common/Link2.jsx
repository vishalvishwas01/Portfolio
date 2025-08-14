"use client";

import { motion, useAnimation } from "motion/react";

const defaultTransition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

const Link2 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M9 17H7A5 5 0 0 1 7 7h2"
          variants={{
            normal: { x: 0 },
            animate: { x: -2 },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        />
        <motion.path
          d="M15 7h2a5 5 0 1 1 0 10h-2"
          variants={{
            normal: { x: 0 },
            animate: { x: 2 },
          }}
          transition={defaultTransition}
          animate={controls}
          initial="normal"
        />
        <line x1="8" x2="16" y1="12" y2="12" />
      </svg>
    </div>
  );
};

export { Link2 };
