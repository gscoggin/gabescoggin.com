import { ExternalLink } from 'lucide-react';
import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import AnimatedCard from '../ui/AnimatedCard';
import { projects } from '../../data/projects';

const Projects = () => {
  return (
    <Section id="projects" dark>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading-warm text-center mb-4">
        Portfolio
      </h2>
      <p className="text-text-muted text-center mb-16 max-w-lg mx-auto">
        Active learning and side projects in software development, AI, and web technologies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <MistFade key={index} delay={Math.min(index * 60, 240)}>
            <AnimatedCard>
              <h3 className="font-heading font-semibold text-heading-warm text-lg mb-3">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 rounded-md bg-amber-accent/10 text-amber-accent text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-amber-accent transition-colors"
                >
                  <ExternalLink size={14} />
                  View on GitHub
                </a>
              )}
            </AnimatedCard>
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
