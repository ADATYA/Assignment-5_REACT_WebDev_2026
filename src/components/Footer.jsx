const columns = [
  {
    title: "Product",
    links: ["Home", "Technologies", "Projects"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#top" className="navbar__brand">
            <span className="navbar__mark">DS</span>
            <span className="navbar__wordmark">
              Dev<span className="navbar__wordmark--accent">Stack</span>
            </span>
          </a>
          <p className="footer__tagline">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>
          <div className="footer__social">
            <a href="#github">GitHub</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
        </div>

        {columns.map((col) => (
          <nav className="footer__col" key={col.title} aria-label={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="container footer__bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="footer__bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
