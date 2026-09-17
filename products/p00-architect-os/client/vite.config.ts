import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";

const here = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: here,
  plugins: [react()],
  server: {
    port: 5177,
    proxy: { "/api": "http://localhost:5178" },
  },
  build: { outDir: path.resolve(here, "../dist"), emptyOutDir: true },
});
