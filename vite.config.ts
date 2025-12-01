import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 👇 This is the important part for GitHub Pages
  // In production (GitHub Pages), your app will be served from:
  // https://shara-raj.github.io/wellmoon-veda-harmony/
  // so the base MUST be '/repo-name/'
  base: mode === "production" ? "/wellmoon-veda-harmony/" : "/",

  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
