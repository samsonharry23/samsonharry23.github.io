import { motion } from "framer-motion";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader" role="status" aria-label="Loading portfolio">
      <motion.div
        className="loader__ring"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.1, ease: "linear" }}
      />
      <motion.p
        className="loader__text gradient-text"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
      >
        Loading…
      </motion.p>
    </div>
  );
}
