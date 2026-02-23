const AnimatedCard = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`bg-bg-surface border border-border rounded-xl p-6 transition-all duration-300 ${
        hover ? 'hover:shadow-lg hover:shadow-amber-accent/5 hover:border-amber-accent/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
