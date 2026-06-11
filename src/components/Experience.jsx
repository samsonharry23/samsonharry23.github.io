import { motion } from "framer-motion";
import { FiBriefcase, FiAward, FiClock } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, revealOnScroll } from "../utils/motion";
import "./Experience.css";

// Fresher-friendly placeholders. Swap these out as you gain experience.
const items = [
  {
    icon: <FiBriefcase />,
    title: "Internship Experience",
    status: "Applications Sent",
    text: "Aggressively applying to internships and refreshing my inbox like it owes me money. Hand me a real project and I'll happily trade this 'Coming Soon' for actual deliverables.",
  },
  {
    icon: <FiAward />,
    title: "Professional Experience",
    status: "Awaiting Offer",
    text: "Zero years of professional experience, 100% ready to change that. The only thing missing from my résumé is the job — a problem you're uniquely qualified to solve.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="My Journey"
          title="Experience"
          subtitle="Two very impressive cards, currently powered entirely by potential. Hiring managers, you know what to do."
        />

        <motion.div
          className="experience__grid"
          variants={staggerContainer(0.15)}
          {...revealOnScroll}
        >
          {items.map((item) => (
            <motion.div key={item.title} className="experience__card glass" variants={fadeInUp}>
              <span className="experience__icon">{item.icon}</span>
              <h3 className="experience__title">{item.title}</h3>
              <span className="experience__status">
                <FiClock /> {item.status}
              </span>
              <p className="experience__text">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
