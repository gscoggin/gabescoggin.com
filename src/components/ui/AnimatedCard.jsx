const AnimatedCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-bg-surface border border-border rounded-2xl p-6 shadow-sm shadow-ink/[0.03] transition-colors duration-200 ${
        hover ? 'hover:border-accent/30' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
