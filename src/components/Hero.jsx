import { motion } from "framer-motion";
import { FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { personal } from "../data/info";
import TypeWriter from "./TypeWriter";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  revealOnScroll,
} from "../utils/motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero__grid">
        {/* ---------- Left: profile image with floating glow ---------- */}
        <motion.div
          className="hero__image-wrap"
          variants={scaleIn}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__glow" aria-hidden="true" />
          <motion.img
            src={personal.profileImage}
            alt={`Portrait of ${personal.name}`}
            className="hero__image"
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            loading="eager"
          />
          <span className="hero__badge glass">Open to work</span>
        </motion.div>

        {/* ---------- Right: text content ---------- */}
        <motion.div
          className="hero__content"
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={fadeInUp}>
            Hi there, I'm
          </motion.p>

          <motion.h1 className="hero__name" variants={fadeInUp}>
            {personal.name}
          </motion.h1>

          <motion.p className="hero__role" variants={fadeInUp}>
            <TypeWriter words={personal.roles} />
          </motion.p>

          <motion.p className="hero__intro" variants={fadeInUp}>
            {personal.shortIntro}
          </motion.p>

          <motion.div className="hero__buttons" variants={fadeInUp}>
            <a
              href={personal.resumeUrl}
              download
              className="btn btn-primary"
            >
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              <FiMail /> Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* ---------- Stat cards ---------- */}
      <motion.div
        className="container hero__stats"
        variants={staggerContainer(0.1)}
        {...revealOnScroll}
      >
        {personal.stats.map((stat) => (
          <motion.div key={stat.label} className="hero__stat glass" variants={fadeInUp}>
            <span className="hero__stat-value gradient-text">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- Detailed About / Objective / Education ---------- */}
      <div className="container hero__about">
        <motion.div className="hero__about-text" variants={fadeInUp} {...revealOnScroll}>
          <h3 className="hero__about-title">
            About <span className="gradient-text">Me</span>
          </h3>
          <p>{personal.about}</p>
          <h4 className="hero__about-subtitle">Career Objective</h4>
          <p>{personal.objective}</p>
        </motion.div>

        <motion.div
          className="hero__education"
          variants={staggerContainer(0.12)}
          {...revealOnScroll}
        >
          <h4 className="hero__about-subtitle">
            <FiMapPin /> Education
          </h4>
          {personal.education.map((edu) => (
            <motion.div key={edu.degree} className="hero__edu-card glass" variants={fadeInUp}>
              <span className="hero__edu-period">{edu.period}</span>
              <h5>{edu.degree}</h5>
              <p>{edu.institution}</p>
              {edu.detail && <span className="hero__edu-detail">{edu.detail}</span>}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
