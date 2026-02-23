import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import { featuredWork } from '../../data/featuredWork';

const FeaturedWork = () => {
  return (
    <Section id="featured-work">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading-warm text-center mb-16">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredWork.map((item, index) => (
          <MistFade key={index} delay={Math.min(index * 60, 240)}>
            <div className="bg-bg-surface border border-border rounded-xl p-6 border-l-[3px] border-l-amber-accent hover:bg-amber-accent/[0.06] transition-all duration-200">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">
                {item.company}
              </p>
              <h3 className="font-heading font-semibold text-heading-warm text-lg mb-2">
                {item.program}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedWork;
