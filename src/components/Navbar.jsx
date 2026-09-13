const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__mark">DS</span>
          <span className="navbar__wordmark">
            Dev<span className="navbar__wordmark--accent">Stack</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={
                i === 0 ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#signin" className="navbar__signin">
            Sign In
          </a>
          <a href="#signup" className="navbar__signup">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
