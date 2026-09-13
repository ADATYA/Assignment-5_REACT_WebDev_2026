function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__heading">
            <span>Build Your Ideal</span>
            <span className="hero__heading--gradient">Development Stack</span>
          </h1>
          <p className="hero__lede">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="hero__actions">
            <a href="#technologies" className="btn btn--gradient">
              Explore Technologies
            </a>
            <a href="#about" className="btn btn--outline">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero__art" aria-hidden="true">
          <svg viewBox="0 0 360 360" className="hero__svg">
            <defs>
              <linearGradient id="stackGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
              <linearGradient id="stackGrad2" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
              <linearGradient id="stackGrad3" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>

            <ellipse cx="180" cy="300" rx="120" ry="16" fill="#0f1222" opacity="0.06" />

            <g transform="translate(60,150)">
              <polygon points="120,0 240,42 120,84 0,42" fill="url(#stackGrad3)" opacity="0.9" />
              <polygon points="0,42 120,84 120,124 0,82" fill="#f97316" opacity="0.55" />
              <polygon points="240,42 120,84 120,124 240,82" fill="#ec4899" opacity="0.55" />
            </g>

            <g transform="translate(75,90)">
              <polygon points="105,0 210,37 105,74 0,37" fill="url(#stackGrad2)" opacity="0.9" />
              <polygon points="0,37 105,74 105,108 0,72" fill="#38bdf8" opacity="0.5" />
              <polygon points="210,37 105,74 105,108 210,72" fill="#818cf8" opacity="0.5" />
            </g>

            <g transform="translate(90,30)">
              <polygon points="90,0 180,32 90,64 0,32" fill="url(#stackGrad1)" opacity="0.95" />
              <polygon points="0,32 90,64 90,94 0,62" fill="#a78bfa" opacity="0.55" />
              <polygon points="180,32 90,64 90,94 180,62" fill="#f472b6" opacity="0.55" />
              <rect x="60" y="10" width="28" height="28" rx="6" fill="#fff" opacity="0.85" />
              <text x="74" y="30" textAnchor="middle" fontSize="14" fontWeight="700" fill="#8b5cf6">
                Aa
              </text>
            </g>

            <circle cx="270" cy="120" r="8" fill="#38bdf8" opacity="0.7" />
            <circle cx="95" cy="70" r="6" fill="#f472b6" opacity="0.7" />
            <circle cx="255" cy="220" r="7" fill="#fb923c" opacity="0.7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
