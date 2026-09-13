function TechnologyCard({ tech, isSelected, onToggle }) {
  return (
    <article className="tech-card">
      <div className="tech-card__top">
        <span
          className="tech-card__icon"
          style={{ background: tech.iconBg }}
          aria-hidden="true"
        >
          {tech.icon}
        </span>
        {tech.badge && (
          <span
            className="tech-card__badge"
            style={{ background: tech.badgeBg, color: tech.badgeColor }}
          >
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="tech-card__name">{tech.name}</h3>
      <p className="tech-card__desc">{tech.description}</p>

      <div className="tech-card__meta">
        <span className="pill">{tech.category}</span>
        <span className="pill">{tech.level}</span>
        <span className="tech-card__rating">
          <span className="tech-card__star" aria-hidden="true">
            ★
          </span>
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        className={
          isSelected
            ? "btn-add btn-add--selected"
            : "btn-add"
        }
        onClick={() => onToggle(tech)}
        aria-pressed={isSelected}
      >
        {isSelected ? "Remove from Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;
