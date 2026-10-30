import { Github } from 'lucide-react';
import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import { builderIntro, tools } from '../../data/builder';
import { personal } from '../../data/personal';

const Builder = () => {
  return (
    <Section id="builder" dark>
      <h2 className="font-heading font-medium text-3xl md:text-4xl text-ink mb-6">
        I build software, not just roadmaps
      </h2>

      <MistFade>
        <p className="max-w-2xl text-text-secondary leading-relaxed mb-12">
          {builderIntro}
        </p>
      </MistFade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, i) => (
          <MistFade key={tool.name} delay={Math.min(i * 60, 240)}>
            <div className="h-full bg-bg-surface border border-border rounded-2xl p-6 shadow-sm shadow-ink/[0.03]">
              <h3 className="font-mono text-sm font-semibold text-accent-deep mb-2">
                {tool.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {tool.description}
              </p>
            </div>
          </MistFade>
        ))}

        <MistFade delay={300}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="h-full flex items-center justify-center gap-2 border border-dashed border-border rounded-2xl p-6 text-sm font-medium text-text-muted hover:text-accent hover:border-accent transition-colors"
          >
            <Github size={16} />
            More on GitHub
          </a>
        </MistFade>
      </div>
    </Section>
  );
};

export default Builder;
