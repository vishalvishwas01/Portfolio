"use client";

import { motion, useAnimation } from "motion/react";
import { useState } from "react";

const defaultTransition = {
  type: "spring",
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const Copy = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}) => {
  const controls = useAnimation();
  const [copied, setCopied] = useState(false);

  const email = "vishalvishwas7082@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

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
      onClick={handleCopy}
      title={copied ? "Copied!" : "Click to copy"}
      aria-label="Copy email"
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
        {copied ? (
          // ✅ Checkmark icon when copied
          <motion.path
            d="M5 13l4 4L19 7"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        ) : (
          <>
            <motion.rect
              width="14"
              height="14"
              x="8"
              y="8"
              rx="2"
              ry="2"
              variants={{
                normal: { translateY: 0, translateX: 0 },
                animate: { translateY: -3, translateX: -3 },
              }}
              animate={controls}
              transition={defaultTransition}
            />
            <motion.path
              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
              variants={{
                normal: { x: 0, y: 0 },
                animate: { x: 3, y: 3 },
              }}
              animate={controls}
              transition={defaultTransition}
            />
          </>
        )}
      </svg>
    </div>
  );
};

export { Copy };
