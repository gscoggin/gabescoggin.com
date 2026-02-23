const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border text-center">
      <p className="text-text-muted text-sm">
        &copy; Gabe Scoggin, {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
