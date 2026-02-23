const variants = {
  primary:
    'bg-amber-accent hover:bg-amber-accent-light text-bg-base shadow-lg shadow-amber-accent/20 hover:shadow-amber-accent/30 hover:scale-[1.02]',
  secondary:
    'bg-transparent border border-gold-highlight/40 text-gold-highlight hover:bg-amber-accent/15',
};

const Button = ({ variant = 'primary', href, onClick, children, className = '' }) => {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-sm font-medium text-sm transition-all duration-200 cursor-pointer';
  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
