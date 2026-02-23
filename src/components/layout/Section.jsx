const Section = ({ id, children, className = '', dark = false }) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-4 sm:px-6 ${
        dark ? 'bg-bg-surface' : 'bg-bg-base'
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
