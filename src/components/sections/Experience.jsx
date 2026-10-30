import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import TimelineItem from './TimelineItem';
import { experience } from '../../data/experience';

const Experience = () => {
  return (
    <Section id="experience">
      <h2 className="font-heading font-medium text-3xl md:text-4xl text-ink mb-16">
        Experience
      </h2>

      <div className="max-w-3xl mx-auto">
        {experience.map((item, index) => (
          <MistFade key={index} delay={Math.min(index * 60, 240)}>
            <TimelineItem item={item} />
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
