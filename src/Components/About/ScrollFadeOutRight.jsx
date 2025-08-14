// ScrollSkillItem.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function ScrollFadeOutRight({ children, delay = 0, triggerRef }) {
  const ref = useRef(null);
  const [endX, setEndX] = useState(200); // default end x

  // Set responsive endX based on screen width
  useEffect(() => {
    const updateEndX = () => {
      setEndX(window.innerWidth < 1024 ? 1500 : 200);
    };

    updateEndX(); // Set on mount
    window.addEventListener("resize", updateEndX); // Update on resize

    return () => window.removeEventListener("resize", updateEndX);
  }, []);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start center", "center start"],
  });

  const start = 0.0 + delay;
  const end = 0.3 + delay;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const x = useTransform(scrollYProgress, [start, end], [10, endX]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="text-xl sm:text-3xl font-[Roboto] flex justify-start items-center gap-3 tracking-normal normal-case w-auto"
    >
      {children}
    </motion.div>
  );
}

export default ScrollFadeOutRight;
