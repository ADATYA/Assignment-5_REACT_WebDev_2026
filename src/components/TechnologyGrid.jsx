import TechnologyCard from "./TechnologyCard.jsx";
import StackSidebar from "./StackSidebar.jsx";

function TechnologyGrid({ technologies, selectedIds, onToggle, onRemove, onRemoveAll, selected }) {
  return (
    <section className="tech-section" id="technologies">
      <div className="container">
        <h2 className="tech-section__heading">
          Explore the <span className="tech-section__heading--accent">Technologies</span>
        </h2>
        <p className="tech-section__sub">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="tech-section__layout">
          <div className="tech-section__grid">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                isSelected={selectedIds.has(tech.id)}
                onToggle={onToggle}
              />
            ))}
          </div>

          <StackSidebar
            selected={selected}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
}

export default TechnologyGrid;
