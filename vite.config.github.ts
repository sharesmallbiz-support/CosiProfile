import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const buildDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
const buildVersion = process.env.npm_package_version || '1.0.0';

export default defineConfig({
  plugins: [react()],
  base: './',
  define: {
    '__BUILD_DATE__': JSON.stringify(buildDate),
    '__BUILD_VERSION__': JSON.stringify(buildVersion),
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
