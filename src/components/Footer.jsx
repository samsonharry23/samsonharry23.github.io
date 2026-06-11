import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { personal, socials } from "../data/info";
import "./Footer.css";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <span className="gradient-text">&lt;/&gt;</span> {personal.name}
          </a>
          <p>{personal.roles[0]}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__socials">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          )}
          {socials.email && (
            <a href={`mailto:${socials.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          )}
          {socials.instagram && (
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {year} {personal.name}. All rights reserved.</p>
        <p>Built with React &amp; JavaScript</p>
      </div>
    </footer>
  );
}
