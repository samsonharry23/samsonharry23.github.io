import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useActiveSection } from "../hooks/useActiveSection";
import "./Navbar.css";

const links = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const sectionIds = links.map((l) => l.id);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  // Add a stronger blur/background once the user scrolls down a bit.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <span className="gradient-text">&lt;/&gt;</span> Portfolio
        </a>

        {/* Desktop + mobile links (mobile toggles via the `open` class) */}
        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? "is-active" : ""}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}
