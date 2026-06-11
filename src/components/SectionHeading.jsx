import { motion } from "framer-motion";
import { fadeInUp, revealOnScroll } from "../utils/motion";
import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.header
      className="section-heading"
      variants={fadeInUp}
      {...revealOnScroll}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </motion.header>
  );
}
