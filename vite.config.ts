import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import linaria from "@linaria/rollup";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-macros"],
      },
    }),
    linaria(),
  ],
});
