import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personal } from '../../data/personal';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import Button from '../ui/Button';

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(232, 168, 56, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232, 168, 56, 0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Organic arc SVG — static decorative element */}
      <svg
        className="absolute inset-0 w-full h-full hidden sm:block"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        {/* Primary arc */}
        <path
          d="M 0 585 C 360 720, 1008 90, 1440 225"
          stroke="#F2D399"
          strokeWidth="2.5"
          strokeOpacity="0.28"
          fill="none"
        />
        {/* Secondary arc — layered offset */}
        <path
          d="M 0 635 C 380 750, 1030 140, 1440 275"
          stroke="#F2D399"
          strokeWidth="2"
          strokeOpacity="0.14"
          fill="none"
        />
      </svg>

      {/* Warm ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-accent/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-accent/2 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-heading-warm tracking-tight"
          style={{ textShadow: '0 0 40px rgba(232, 168, 56, 0.15)' }}
        >
          {personal.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mt-4 text-base text-text-muted max-w-xl mx-auto leading-relaxed"
        >
          {personal.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={() => scrollToSection('experience')}>
            View My Work
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ zIndex: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
