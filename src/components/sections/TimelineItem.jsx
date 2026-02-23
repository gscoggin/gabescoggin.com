const TimelineItem = ({ item }) => {
  return (
    <div className="relative pl-12 md:pl-16 pb-12 last:pb-0">

      {/* Timeline line */}
      <div className="absolute left-[15px] md:left-[19px] top-3 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-2 md:left-2.5 top-2 w-3 h-3 rounded-full bg-amber-accent border-2 border-bg-base z-10" />

      {/* Card */}
      <div className="bg-bg-surface border border-border rounded-xl p-6 hover:border-amber-accent/20 transition-colors duration-300">
        <div className="flex items-start gap-4 mb-4">
          {item.logo && (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-12 h-12 rounded-lg bg-white/90 flex items-center justify-center p-1 hover:scale-105 transition-transform"
            >
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="w-full h-full object-contain"
              />
            </a>
          )}
          <div>
            <h3 className="text-lg font-semibold text-heading-warm">{item.title}</h3>
            <p className="text-amber-accent text-sm font-medium">{item.company}</p>
            <span className="text-text-muted text-sm">{item.date}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {item.achievements && (
          <ul className="space-y-2 mb-4">
            {item.achievements.map((achievement, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-text-secondary"
              >
                <span className="text-amber-accent mt-1 shrink-0">&rsaquo;</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Key Programs tags */}
        {item.programs && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
            {item.programs.map((program, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-full text-xs font-medium text-amber-accent border border-amber-accent/30 bg-amber-accent/5"
              >
                {program}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
