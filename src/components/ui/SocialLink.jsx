const SocialLink = ({ icon: Icon, href, label, value, external = false, download = false }) => {
  const opensNew = external || download;
  return (
    <a
      href={href}
      target={opensNew ? '_blank' : undefined}
      rel={opensNew ? 'noopener noreferrer' : undefined}
      download={download || undefined}
      className="flex items-center gap-4 p-4 rounded-xl bg-bg-surface border border-border
        hover:border-amber-accent/30 hover:bg-bg-elevated transition-all duration-300 group"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-accent/10 text-amber-accent group-hover:bg-amber-accent/20 transition-colors">
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <div className="text-xs text-text-muted uppercase tracking-wider">{label}</div>
        <div className="text-text-primary text-sm font-medium">{value}</div>
      </div>
    </a>
  );
};

export default SocialLink;
