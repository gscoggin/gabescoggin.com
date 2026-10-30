const SocialLink = ({ icon, href, label, value, external = false, download = false }) => {
  const Icon = icon;
  const opensNew = external || download;
  return (
    <a
      href={href}
      target={opensNew ? '_blank' : undefined}
      rel={opensNew ? 'noopener noreferrer' : undefined}
      download={download || undefined}
      className="flex items-center gap-4 p-4 rounded-2xl bg-bg-surface border border-border
        hover:border-accent/40 transition-colors duration-200 group"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-bg-tint text-accent transition-colors">
        <Icon size={18} />
      </div>
      <div className="flex-1">
        <div className="text-xs text-text-muted uppercase tracking-wider">{label}</div>
        <div className="text-ink text-sm font-medium">{value}</div>
      </div>
    </a>
  );
};

export default SocialLink;
