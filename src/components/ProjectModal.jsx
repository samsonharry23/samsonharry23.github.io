import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";
import "./ProjectModal.css";

export default function ProjectModal({ project, onClose }) {
  // Close on Escape key and lock background scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="modal__overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <motion.div
        className="modal glass"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close">
          <FiX />
        </button>

        <img className="modal__image" src={project.image} alt={`${project.title} preview`} />

        <div className="modal__content">
          <h3 className="modal__title">{project.title}</h3>
          <p className="modal__desc">{project.description}</p>

          <div className="modal__section">
            <h4>Technologies Used</h4>
            <ul className="modal__tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>

          <div className="modal__links">
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <FiGithub /> View Code
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary">
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
