import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a relative base so the build works on Netlify, Vercel
  // and GitHub Pages sub-paths without extra config.
  base: "./",
});
