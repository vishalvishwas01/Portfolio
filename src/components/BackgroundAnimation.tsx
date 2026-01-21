import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const BackgroundAnimation = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    // Detect Safari
    const userAgent = navigator.userAgent.toLowerCase();
    const safari = /safari/.test(userAgent) && !/chrome|edge|firefox/.test(userAgent);
    setIsSafari(safari);

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Reduce particle count on mobile and Safari (10 instead of 50)
    const particleCount = isMobile || safari ? 10 : 50;
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Memoize particle elements to prevent re-renders
  const particleElements = useMemo(
    () =>
      particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )),
    [particles]
  );

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs - disable on mobile and Safari for better performance */}
      {!isMobile && !isSafari && (
        <>
          <motion.div
            className="gradient-orb w-[600px] h-[600px] -top-48 -left-48"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="gradient-orb gradient-orb-secondary w-[500px] h-[500px] top-1/3 -right-32"
            animate={{
              x: [0, -80, 0],
              y: [0, 100, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform' }}
          />
          <motion.div
            className="gradient-orb w-[400px] h-[400px] bottom-0 left-1/4"
            animate={{
              x: [0, 60, 0],
              y: [0, -80, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform' }}
          />
        </>
      )}

      {/* Floating particles - reduced count on mobile */}
      {particleElements}

      {/* Grid overlay - disable on mobile and Safari */}
      {!isMobile && !isSafari && (
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            willChange: 'auto',
          }}
        />
      )}
    </div>
  );
};

export default BackgroundAnimation;
