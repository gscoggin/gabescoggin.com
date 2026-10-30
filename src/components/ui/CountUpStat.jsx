// Static stat display — intentionally no count-up animation.
const CountUpStat = ({ end, suffix = '', label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-medium font-heading text-ink">
        {end}
        {suffix}
      </div>
      <div className="text-sm text-text-muted mt-2">{label}</div>
    </div>
  );
};

export default CountUpStat;
