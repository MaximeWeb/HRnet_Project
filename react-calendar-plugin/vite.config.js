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
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
    }),
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, "src/index.js"),
      name: "ReactCalendarPlugin",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "es"
          ? "react-calendar-plugin.js"
          : "react-calendar-plugin.umd.cjs",
    },
  },
});