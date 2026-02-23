const SectionDivider = () => {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex-1 h-px bg-gold-highlight/10" />
      <div className="mx-4 w-2 h-2 rotate-45 border border-amber-accent/30 bg-transparent" />
      <div className="flex-1 h-px bg-gold-highlight/10" />
    </div>
  );
};

export default SectionDivider;
