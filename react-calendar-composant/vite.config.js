import { resolve } from "node:path";
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
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"),
      name: "ReactCalendarComposant",

      formats: ["es", "umd"],

      fileName: (format) =>
        format === "es"
          ? "react-calendar-composant.js"
          : "react-calendar-composant.umd.cjs",

      cssFileName: "react-calendar-composant",
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