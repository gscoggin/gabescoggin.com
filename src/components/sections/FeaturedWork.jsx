import { ExternalLink } from 'lucide-react';
import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import { featuredWork } from '../../data/featuredWork';

const FeaturedWork = () => {
  return (
    <Section id="featured-work" dark>
      <h2 className="font-heading font-medium text-3xl md:text-4xl text-ink mb-16">
        Featured Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredWork.map((item, index) => (
          <MistFade key={index} delay={Math.min(index * 60, 240)} className="h-full">
            <div className="h-full flex flex-col bg-bg-surface border border-border rounded-2xl p-6 shadow-sm shadow-ink/[0.03]">
              <p className="text-xs text-accent-deep uppercase tracking-wider mb-2">
                {item.company}
              </p>
              <h3 className="font-heading font-medium text-ink text-lg mb-2">
                {item.program}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed flex-1">
                {item.description}
              </p>
              {(item.articleUrl || item.appLinks || item.links) && (
                <div className="flex flex-wrap gap-3 mt-4 pt-3 border-t border-border">
                  {item.articleUrl && (
                    <a
                      href={item.articleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} />
                      Press Release
                    </a>
                  )}
                  {item.appLinks?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} />
                      {link.label}
                    </a>
                  ))}
                  {item.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={12} />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default FeaturedWork;
