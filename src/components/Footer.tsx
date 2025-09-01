const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-sm border-t border-white/20 py-4">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-slate-600 font-light">
          2025 BeachCast. Made with by{" "}
          <a
            href="https://jkrokos.dev"
            className="text-cyan-600 hover:text-cyan-700 transition-colors font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            JKrokos
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
