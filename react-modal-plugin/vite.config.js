import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "node:fs";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-types",
      closeBundle() {
        copyFileSync(
          resolve(import.meta.dirname, "index.d.ts"),
          resolve(import.meta.dirname, "dist/index.d.ts")
        );
      },
    },
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"),
      name: "ReactModalPlugin",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "es"
          ? "react-modal-plugin.js"
          : "react-modal-plugin.umd.cjs",
    },

    rolldownOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "React",
          "react/jsx-dev-runtime": "React",
        },
      },
    },
  },
});