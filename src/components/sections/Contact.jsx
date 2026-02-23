import { Mail, Linkedin, Github, MapPin, FileText } from 'lucide-react';
import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import SocialLink from '../ui/SocialLink';
import { personal } from '../../data/personal';

const contactLinks = [
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email', value: personal.email },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn', value: 'linkedin.com/in/gabescoggin', external: true },
  { icon: Github, href: personal.github, label: 'GitHub', value: 'github.com/gscoggin', external: true },
  { icon: FileText, href: personal.resumeUrl, label: 'Resume', value: 'Download Resume', download: 'Gabe_Scoggin_Resume.pdf' },
  { icon: MapPin, href: 'https://maps.google.com/maps?q=San+Francisco+Bay+Area', label: 'Location', value: personal.location, external: true },
];

const Contact = () => {
  return (
    <Section id="contact">
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-heading-warm text-center mb-4">
        Get In Touch
      </h2>
      <p className="text-text-muted text-center mb-12 max-w-md mx-auto">
        Open to conversations about AI safety, technical program management, and engineering leadership.
      </p>

      <div className="max-w-md mx-auto space-y-3">
        {contactLinks.map((link, index) => (
          <MistFade key={link.label} delay={Math.min(index * 60, 240)}>
            <SocialLink {...link} />
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
