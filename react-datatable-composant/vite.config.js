import {
  defineConfig,
  esmExternalRequirePlugin,
} from "vite";

import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    react(),

    esmExternalRequirePlugin({
      external: [
        /^react($|\/)/,
        /^react-dom($|\/)/,
      ],
    }),
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"),
      name: "ReactDataTableComponent",
      fileName: "react-datatable-component",

      // Nom du fichier CSS généré
      cssFileName: "react-datatable-component",
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