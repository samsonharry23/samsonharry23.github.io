import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { fadeInUp } from "../utils/motion";

const ProjectCard = forwardRef(function ProjectCard({ project, onOpen }, ref) {
  return (
    <motion.article
      ref={ref}
      layout
      variants={fadeInUp}
      exit={{ opacity: 0, scale: 0.9 }}
      className="project-card glass"
    >
      {/* Cover image — clicking it opens the detail modal */}
      <button
        className="project-card__media"
        onClick={onOpen}
        aria-label={`View details for ${project.title}`}
      >
        <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        <span className="project-card__view">
          View details <FiArrowUpRight />
        </span>
      </button>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">
            <FiGithub /> Code
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
});

export default ProjectCard;
