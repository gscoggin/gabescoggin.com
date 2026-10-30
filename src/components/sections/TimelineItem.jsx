const TimelineItem = ({ item }) => {
  return (
    <div className="relative pl-12 md:pl-16 pb-12 last:pb-0">

      {/* Timeline line */}
      <div className="absolute left-[15px] md:left-[19px] top-3 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div className="absolute left-2 md:left-2.5 top-2 w-3 h-3 rounded-full bg-accent border-2 border-bg-base z-10" />

      {/* Card */}
      <div className="bg-bg-surface border border-border rounded-2xl p-6 shadow-sm shadow-ink/[0.03]">
        <div className="flex items-start gap-4 mb-4">
          {item.logo && (
            <a
              href={item.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 w-12 h-12 rounded-lg bg-bg-tint border border-border flex items-center justify-center p-1.5"
            >
              <img
                src={item.logo}
                alt={item.logoAlt}
                className="w-full h-full object-contain"
              />
            </a>
          )}
          <div>
            <h3 className="font-heading text-lg font-medium text-ink">{item.title}</h3>
            <p className="text-accent text-sm font-medium">{item.company}</p>
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
                <span className="text-accent mt-1 shrink-0">&rsaquo;</span>
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
                className="px-2.5 py-1 rounded-full text-xs font-medium text-accent-deep bg-bg-tint border border-border"
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
