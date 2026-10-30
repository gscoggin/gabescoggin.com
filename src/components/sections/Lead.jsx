import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import { leadQuote, principles } from '../../data/principles';

const Lead = () => {
  return (
    <Section id="lead" dark>
      <h2 className="font-heading font-medium text-3xl md:text-4xl text-ink mb-12">
        How I Lead
      </h2>

      <MistFade>
        <blockquote className="max-w-3xl border-l-2 border-accent pl-6 mb-16">
          <p className="font-heading text-xl md:text-2xl text-ink leading-relaxed">
            {leadQuote}
          </p>
        </blockquote>
      </MistFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {principles.map((principle, i) => (
          <MistFade key={principle.title} delay={Math.min(i * 60, 240)}>
            <div className="h-full bg-bg-surface border border-border rounded-2xl p-6 shadow-sm shadow-ink/[0.03]">
              <h3 className="font-heading text-lg font-medium text-ink mb-3">
                {principle.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {principle.body}
              </p>
            </div>
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default Lead;
