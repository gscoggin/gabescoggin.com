import Section from '../layout/Section';
import MistFade from '../ui/MistFade';
import { signatureWork } from '../../data/signatureWork';

const SignatureWork = () => {
  return (
    <Section id="work">
      <h2 className="font-heading font-medium text-3xl md:text-4xl text-ink mb-16">
        Signature Work
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {signatureWork.map((item, i) => (
          <MistFade key={item.title} delay={Math.min(i * 60, 240)}>
            <div className="h-full flex flex-col bg-bg-surface border border-border rounded-2xl p-7 shadow-sm shadow-ink/[0.03]">
              <p className="text-xs font-medium tracking-widest uppercase text-text-muted mb-3">
                {item.context}
              </p>
              <h3 className="font-heading text-xl font-medium text-ink mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {item.body}
              </p>
              <p className="mt-6 pt-4 border-t border-border text-sm font-medium text-accent-deep">
                {item.metric}
              </p>
            </div>
          </MistFade>
        ))}
      </div>
    </Section>
  );
};

export default SignatureWork;
