import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import CountUpStat from '../ui/CountUpStat';
import { personal } from '../../data/personal';

const About = () => {
  return (
    <Section id="about">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading-warm text-center mb-16">
        About
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <MistFade className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-amber-accent/25 to-amber-accent/5 rounded-2xl blur-sm" />
            <img
              src="/images/profile-photo.jpg"
              alt="Gabe Scoggin"
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl object-cover border border-border"
              loading="lazy"
            />
          </div>
        </MistFade>

        {/* Bio */}
        <MistFade delay={60} className="space-y-5">
          {personal.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-text-secondary leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          {/* Education */}
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
              Education
            </h3>
            <div className="space-y-3">
              {personal.education.map((edu, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4">
                  <div>
                    <span className="text-text-primary text-sm font-medium">
                      {edu.program}
                    </span>
                    <span className="text-text-muted text-sm"> &mdash; {edu.institution}</span>
                  </div>
                  <span className="text-text-muted text-sm shrink-0">{edu.year}</span>
                </div>
              ))}
            </div>
          </div>
        </MistFade>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border">
        {personal.stats.map((stat, i) => (
          <MistFade key={i} delay={Math.min(i * 60, 240)}>
            <CountUpStat
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default About;
