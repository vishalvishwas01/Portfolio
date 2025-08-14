"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../lib/utils";
import ShinyText from '../Common/ShinyText'

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.6
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration,
      delay: stagger(0.1, { startDelay: 1 }),
    });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className=" opacity-0 normal-case break-keep "
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
                <ShinyText
              text={word}
              disabled={false}
              speed={5}
              className="custom-class "
            />{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-semibold font-[Roboto]", className)}>
      <div className="mt-2">
        <div
          className=" dark:text-white text-black text-xl md:text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect