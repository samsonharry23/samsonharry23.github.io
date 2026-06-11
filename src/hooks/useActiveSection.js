import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view using IntersectionObserver,
 * so the navbar can highlight the active link.
 *
 * @param {string[]} sectionIds - ids of the sections to observe
 * @returns {string} the id of the section currently in view
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Trigger when a section's middle reaches the middle of the screen.
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
