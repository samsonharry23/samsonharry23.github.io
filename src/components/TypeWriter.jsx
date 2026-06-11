import { useEffect, useState } from "react";

/**
 * Cycles through an array of words with a typing / deleting animation.
 * Used for the role text in the Hero section.
 */
export default function TypeWriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1400,
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    // Decide what the next frame should show.
    let timeout;
    if (!deleting && text === current) {
      // Finished typing → pause, then start deleting.
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      // Finished deleting → move to the next word.
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      const nextText = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      timeout = setTimeout(
        () => setText(nextText),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span aria-live="polite">
      {text}
      <span className="typewriter-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}
