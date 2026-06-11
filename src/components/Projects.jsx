import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { staggerContainer, revealOnScroll } from "../utils/motion";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  // Build the unique list of technologies for the filter buttons.
  const technologies = useMemo(() => {
    const all = projects.flatMap((p) => p.tech);
    return ["All", ...Array.from(new Set(all))];
  }, []);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A few things I've built while learning and experimenting. Filter by technology to explore."
        />

        {/* ---------- Technology filter ---------- */}
        <div className="projects__filters" role="tablist" aria-label="Filter projects by technology">
          {technologies.map((tech) => (
            <button
              key={tech}
              role="tab"
              aria-selected={filter === tech}
              className={`projects__filter ${filter === tech ? "is-active" : ""}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* ---------- Project grid ---------- */}
        <motion.div
          className="projects__grid"
          variants={staggerContainer(0.12)}
          {...revealOnScroll}
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ---------- Detail modal ---------- */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
