// ScrollSkillItem.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function ScrollAboutItemright({ children, delay = 0, triggerRef }) {
  const ref = useRef(null);

  // Scroll progress is based on the Skills section, not itself
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start center", "center center"], // when Skills reaches center
  });

  const start = 0.0 + delay;
  const end = 0.2 + delay;

  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const x = useTransform(scrollYProgress, [start, end], [200, 0]);

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

export default ScrollAboutItemright;



