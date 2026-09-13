function StackSidebar({ selected, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel" aria-label="Your selected stack">
      <h3 className="stack-panel__title">Your Stack</h3>
      <p className="stack-panel__count">
        {selected.length} Technolog{selected.length === 1 ? "y" : "ies"} Selected
      </p>

      {selected.length === 0 ? (
        <p className="stack-panel__empty">
          Add technologies from the list to start building your stack.
        </p>
      ) : (
        <ul className="stack-panel__list">
          {selected.map((tech) => (
            <li key={tech.id} className="stack-panel__item">
              <span
                className="stack-panel__item-icon"
                style={{ background: tech.iconBg }}
                aria-hidden="true"
              >
                {tech.icon}
              </span>
              <span className="stack-panel__item-text">
                <span className="stack-panel__item-name">{tech.name}</span>
                <span className="stack-panel__item-category">
                  {tech.category}
                </span>
              </span>
              <button
                type="button"
                className="stack-panel__remove"
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name} from stack`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      {selected.length > 0 && (
        <button type="button" className="stack-panel__clear" onClick={onRemoveAll}>
          Remove All
        </button>
      )}
    </aside>
  );
}

export default StackSidebar;
