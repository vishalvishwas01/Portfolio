// ScrollSkillItem.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function ScrollFadeOutLeft({ children, delay = 0, triggerRef }) {
  const ref = useRef(null);
  const [startX, setStartX] = useState(10); // default

  // Set responsive startX based on screen width
  useEffect(() => {
    const updateStartX = () => {
      setStartX(window.innerWidth < 1024 ? 50 : 10);
    };

    updateStartX(); // Set on mount
    window.addEventListener("resize", updateStartX); // Update on resize

    return () => window.removeEventListener("resize", updateStartX);
  }, []);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start center", "center start"],
  });

  const start = 0.0 + delay;
  const end = 0.3 + delay;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const x = useTransform(scrollYProgress, [start, end], [startX, -200]);

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

export default ScrollFadeOutLeft;
