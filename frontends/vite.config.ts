import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@typings": "./../typings/*",
    },
  },
  server: {
    port: 5680,
    host: "0.0.0.0"
  }
});
