import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@iglab-design-system/stitches",
        replacement: resolve(__dirname, "stitches.config.ts"),
      },
      {
        find: "@iglab-design-system/components",
        replacement: resolve(__dirname, "./src/components"),
      },
    ],
  },
});
