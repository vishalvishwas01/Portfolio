import { motion } from 'framer-motion';
import './index.css';

const transition = (OgComponent) => {
  const WrappedComponent = (props) => {
    return (
      <>
        {/* Transition Overlays */}
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0, skewY: 5, rotate: 1 }}
          animate={{ scaleY: 0, skewY: 0 }}
          exit={{ scaleY: 1, skewY: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1, skewY: 0 }}
          animate={{ scaleY: 0, skewY: 5 }}
          exit={{ scaleY: 0, skewY: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.1,
          }}
        />

        {/* Fade In Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <OgComponent {...props} />
        </motion.div>
      </>
    );
  };

  return WrappedComponent;
};

export default transition;
