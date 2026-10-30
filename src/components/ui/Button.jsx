const variants = {
  primary:
    'bg-accent hover:bg-accent-deep text-white',
  secondary:
    'bg-transparent border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5',
};

const Button = ({ variant = 'primary', href, onClick, children, className = '' }) => {
  const baseStyles =
    'inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-colors duration-200 cursor-pointer';
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
