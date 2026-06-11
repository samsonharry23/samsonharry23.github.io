// Reusable Framer Motion animation variants used across sections.
// Keeping them here avoids repeating the same config in every component.

export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Parent wrapper that staggers its children's reveal.
export const staggerContainer = (stagger = 0.12, delay = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// Shared props so every section reveals once when scrolled into view.
export const revealOnScroll = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.2 },
};
