import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { socials } from "../data/info";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer, revealOnScroll } from "../utils/motion";
import "./Contact.css";

export default function Contact() {
  // Build the list of contact methods, skipping any left blank in info.js.
  const methods = [
    socials.email && {
      key: "email",
      icon: <FaEnvelope />,
      label: "Email",
      value: socials.email,
      href: `mailto:${socials.email}`,
      external: false,
    },
    socials.linkedin && {
      key: "linkedin",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect with me",
      href: socials.linkedin,
      external: true,
    },
    socials.github && {
      key: "github",
      icon: <FaGithub />,
      label: "GitHub",
      value: "See my work",
      href: socials.github,
      external: true,
    },
    socials.instagram && {
      key: "instagram",
      icon: <FaInstagram />,
      label: "Instagram",
      value: "Say hi",
      href: socials.instagram,
      external: true,
    },
  ].filter(Boolean);

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Have an opportunity or just want to say hi? I'd love to hear from you."
        />

        <motion.div
          className="contact__panel glass"
          variants={fadeInUp}
          {...revealOnScroll}
        >
          <h3 className="contact__title">Let's build something together.</h3>
          <p className="contact__lead">
            I'm currently open to internships and entry-level roles. The fastest
            way to reach me is by email — I'll get back to you as soon as I can.
          </p>

          <a
            href={`mailto:${socials.email}`}
            className="btn btn-primary contact__cta"
          >
            <FiMail /> Email Me
          </a>

          <motion.div
            className="contact__methods"
            variants={staggerContainer(0.1)}
            {...revealOnScroll}
          >
            {methods.map((m) => (
              <motion.a
                key={m.key}
                href={m.href}
                {...(m.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="contact__card glass"
                variants={fadeInUp}
              >
                <span className="contact__card-icon">{m.icon}</span>
                <span className="contact__card-text">
                  <span className="contact__card-label">{m.label}</span>
                  <span className="contact__card-value">{m.value}</span>
                </span>
                <FiArrowUpRight className="contact__card-arrow" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
