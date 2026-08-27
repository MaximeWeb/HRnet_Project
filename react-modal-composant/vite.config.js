import { resolve } from "node:path";
import { copyFileSync } from "node:fs";

import {
  defineConfig,
  esmExternalRequirePlugin,
} from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),

    esmExternalRequirePlugin({
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
      ],
    }),

    {
      name: "copy-types",

      closeBundle() {
        copyFileSync(
          resolve(import.meta.dirname, "index.d.ts"),
          resolve(import.meta.dirname, "dist/index.d.ts"),
        );
      },
    },
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"),

      name: "ReactModalComposant",

      formats: ["es", "umd"],

      fileName: (format) =>
        format === "es"
          ? "react-modal-composant.js"
          : "react-modal-composant.umd.cjs",

      cssFileName: "react-modal-composant",
    },

    rolldownOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "ReactJSXRuntime",
          "react/jsx-dev-runtime": "ReactJSXDevRuntime",
        },
      },
    },
  },
});