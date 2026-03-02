import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Linkedin, FileDown, Github } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const sectionIds = navigation.map((item) => item.id);

{/* External links: LinkedIn, Resume (download), GitHub
   Resume file location: /public/assets/Gabe_Scoggin_Resume.pdf */}
const externalLinks = [
  {
    href: 'https://linkedin.com/in/gabescoggin',
    icon: Linkedin,
    label: 'LinkedIn',
    external: true,
  },
  {
    href: '/assets/Gabe_Scoggin_Resume.pdf',
    icon: FileDown,
    label: 'Resume',
    download: 'Gabe_Scoggin_Resume.pdf',
  },
  {
    href: 'https://github.com/gscoggin',
    icon: Github,
    label: 'GitHub',
    external: true,
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { scrollToSection } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-base/80 backdrop-blur-lg border-b border-border shadow-lg shadow-black/10'
          : 'bg-bg-base border-b border-border/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        {/* Left: logo + section nav */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-heading font-bold text-lg text-text-primary hover:text-amber-accent transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            GS
          </button>

          {/* Desktop section nav */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-amber-accent'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: external links */}
        <div className="flex items-center gap-1">
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              download={link.download || undefined}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-text-muted hover:text-text-primary transition-colors"
              aria-label={link.label}
            >
              <link.icon size={15} />
              <span className="hidden md:inline text-xs font-medium">{link.label}</span>
            </a>
          ))}

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-2 text-text-primary cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-surface/95 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'text-accent bg-amber-accent/10'
                      : 'text-text-muted hover:text-text-primary hover:bg-bg-elevated'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
