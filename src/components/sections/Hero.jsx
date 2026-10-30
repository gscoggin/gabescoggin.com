import { personal } from '../../data/personal';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import Button from '../ui/Button';
import MistFade from '../ui/MistFade';

const Hero = () => {
  const { scrollToSection } = useSmoothScroll();

  return (
    <section className="min-h-[88vh] flex items-center px-4 sm:px-6 pt-16">
      <div className="max-w-6xl mx-auto w-full">
        <MistFade>
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-6">
              Technical Program Management
            </p>

            <h1 className="font-heading font-medium text-5xl sm:text-6xl md:text-7xl text-ink tracking-tight leading-[1.05]">
              {personal.name}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
              {personal.title}
            </p>

            <p className="mt-4 text-base text-text-muted max-w-xl leading-relaxed">
              {personal.description}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button onClick={() => scrollToSection('experience')}>
                View My Work
              </Button>
              <Button variant="secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </Button>
            </div>
          </div>
        </MistFade>
      </div>
    </section>
  );
};

export default Hero;
