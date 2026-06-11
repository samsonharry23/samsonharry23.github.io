import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, revealOnScroll } from "../utils/motion";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          eyebrow="What I Know"
          title="Skills & Technologies"
          subtitle="Tools and languages I use to bring ideas to life — and keep learning."
        />

        <motion.div
          className="skills__grid"
          variants={staggerContainer(0.1)}
          {...revealOnScroll}
        >
          {skillGroups.map((group) => (
            <motion.div key={group.category} className="skills__card glass" variants={fadeInUp}>
              <h3 className="skills__category">{group.category}</h3>

              <ul className="skills__list">
                {group.items.map((skill) => (
                  <li key={skill.name} className="skills__item">
                    <div className="skills__row">
                      <span className="skills__name">{skill.name}</span>
                      <span className="skills__percent">{skill.level}%</span>
                    </div>

                    <div className="skills__bar">
                      <motion.span
                        className="skills__bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
