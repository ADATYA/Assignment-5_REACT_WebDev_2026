import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechnologyGrid from "./components/TechnologyGrid.jsx";
import Footer from "./components/Footer.jsx";
import technologies from "./data/technologies.js";
import "./App.css";

function App() {
  // one selected technology id per category, e.g. { Frontend: "react", Database: "redis" }
  const [selectedByCategory, setSelectedByCategory] = useState({});

  const selectedIds = useMemo(
    () => new Set(Object.values(selectedByCategory)),
    [selectedByCategory]
  );

  const selected = useMemo(
    () => technologies.filter((tech) => selectedIds.has(tech.id)),
    [selectedIds]
  );

  function handleToggle(tech) {
    setSelectedByCategory((prev) => {
      const next = { ...prev };
      if (next[tech.category] === tech.id) {
        delete next[tech.category];
      } else {
        next[tech.category] = tech.id;
      }
      return next;
    });
  }

  function handleRemove(id) {
    const tech = technologies.find((t) => t.id === id);
    if (!tech) return;
    setSelectedByCategory((prev) => {
      const next = { ...prev };
      delete next[tech.category];
      return next;
    });
  }

  function handleRemoveAll() {
    setSelectedByCategory({});
  }

  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <TechnologyGrid
          technologies={technologies}
          selectedIds={selectedIds}
          selected={selected}
          onToggle={handleToggle}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
