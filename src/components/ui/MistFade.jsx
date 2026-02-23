import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
  visible: (delayS) => ({
    opacity: 1,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1], delay: delayS },
  }),
  faded: {
    opacity: 0.15,
    transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
  },
};

const MistFade = ({ children, delay = 0, threshold = 0, exitOpacity = 0.15, className = '' }) => {
  const ref = useRef(null);
  const [state, setState] = useState('hidden');

  // Build faded variant with custom exitOpacity
  const resolvedVariants = exitOpacity === 0.15
    ? variants
    : {
        ...variants,
        faded: {
          opacity: exitOpacity,
          transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
        },
      };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('visible');
        } else {
          // Determine exit direction from bounding rect
          const { top } = entry.boundingClientRect;
          if (top < 0) {
            // Scrolled past the top → ghost
            setState('faded');
          } else {
            // Below viewport → fully hidden
            setState('hidden');
          }
        }
      },
      {
        rootMargin: '-8% 0px -12% 0px',
        threshold,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      variants={resolvedVariants}
      custom={delay / 1000}
      initial="hidden"
      animate={state}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MistFade;
