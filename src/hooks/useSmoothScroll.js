import { useCallback } from 'react';

const NAVBAR_HEIGHT = 72;

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return { scrollToSection };
};
