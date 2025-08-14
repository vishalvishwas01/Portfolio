// ScrollSkillItem.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollSkillItem({ children, delay = 0 }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Add delay by shifting scroll ranges
  const start = 0 + delay;
  const end = 0.3 + delay;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(scrollYProgress, [start, end], [50, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="text-xl sm:text-2xl font-[Roboto] flex justify-center items-center gap-3 tracking-normal normal-case"
    >
      {children}
    </motion.div>
  );
}

export default ScrollSkillItem;
