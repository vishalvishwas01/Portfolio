"use client";
import { useState } from "react";
import { useLottie } from "lottie-react";
import { motion, useAnimation } from "framer-motion";
import arrow from "../assets/arrow.json";
import linkimage from '../assets/linkimage.svg'
import { Link2 } from "./Link2";

export default function AnimatedTextFill({ text = "Hover Me" }) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false); // track hover state

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      backgroundPosition: "0%",
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      backgroundPosition: "100%",
    });
  };

  const ArrowAnimation = () => {
    const options = {
      animationData: arrow,
      loop: true,
      autoplay: true,
      style: {
        height: 100,
        width: 100,
      },
    };

    const { View } = useLottie(options);
    return View;
  };

  return (
    <motion.span
      className="w-full flex justify-start items-center gap-4 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 to-gray-500 bg-[length:200%] bg-clip-text text-transparent cursor-pointer"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={controls}
      initial={{ backgroundPosition: "100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: "linear-gradient(to right, #00f050 50%, #b3b3b3 50%)",
        backgroundSize: "200% 100%",
        backgroundPosition: "100% 0%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
      {/* Conditionally render arrow only when hovered */}
       
        <div className="rotate-90 h-5 hidden sm:"><Link2 /></div>
      
    </motion.span>
  );
}
